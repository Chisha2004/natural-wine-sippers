package com.naturalwine.service;

import com.naturalwine.dto.*;
import com.naturalwine.entity.UserEntity;
import com.naturalwine.model.UserType;
import com.naturalwine.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.UUID;

@Service
public class AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final CartService cartService;

    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtService jwtService, CartService cartService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.cartService = cartService;
    }

    public UserResponse generateGuestUser() {
        UUID guestUUID = UUID.randomUUID();
        String token = jwtService.generateGuestToken(guestUUID);
        return UserResponse.builder()
                .uuid(guestUUID)
                .token(token)
                .userType(UserType.GUEST)
                .build();
    }

    public LoginResponse login(LoginRequest loginRequest) {
        if(StringUtils.hasLength(loginRequest.token())){
            return loginWithToken(loginRequest.token());
        }
        UUID guestUUID = loginRequest.guestUuid() != null ? UUID.fromString(loginRequest.guestUuid()) : null;

        UserEntity user = userRepository.findByEmail(loginRequest.email())
                .orElseThrow(() -> new IllegalArgumentException("Invalid email or password"));

        if (!passwordEncoder.matches(loginRequest.password(), user.getPassword())) {
            throw new IllegalArgumentException("Invalid email or password");
        }

        String token = jwtService.generateToken(user.getId(), user.getUserType());
        //TODO we need a concept of long lived refresh token validity for logged in

        // Migrate guest cart to registered user if guestId provided
        if (guestUUID != null) {
            cartService.migrateGuestCartToRegisteredUser(guestUUID, user.getUuid());
        }

        return new LoginResponse(
            user.getUuid(),
            user.getFirstName(),
            user.getLastName(),
            user.getEmail(),
            token,
            user.getUserType()
        );
    }

    public UserResponse registerBasicUser(final String email, final String password, final UUID guestUuid) {
        if (userRepository.findByEmail(email).isPresent()) {
            throw new IllegalArgumentException("Email already exists");
        }

        UserEntity user = new UserEntity(
            email,
            passwordEncoder.encode(password),
            UserType.BASIC
        );

        user = userRepository.save(user);

        String token = jwtService.generateToken(user.getId(), user.getUserType());

        // Migrate guest cart to registered user if guestUuid provided
        if (guestUuid != null) {
                cartService.migrateGuestCartToRegisteredUser(guestUuid, user.getUuid());
        }

        return new UserResponse(
            user.getUuid(),
            user.getFirstName(),
            user.getLastName(),
            user.getEmail(),
            token,
            user.getUserType()
        );
    }

    private LoginResponse loginWithToken(final String token) {
        if(!jwtService.validateToken(token)){
            throw new IllegalArgumentException("Invalid token");
        }

        UUID userUuid = jwtService.extractUserUuidFromToken(token);
        UserType userType = jwtService.extractUserTypeFromToken(token);

        LoginResponse.LoginResponseBuilder loginResponseBuilder = LoginResponse.builder();

        loginResponseBuilder.userUuid(userUuid)
                .token(token)
                .userType(userType);

        if(userType != UserType.GUEST) {
            UserEntity user = userRepository.findByUuid(userUuid)
                    .orElseThrow(() -> new IllegalArgumentException("User not found"));
            loginResponseBuilder.email(user.getEmail());
            loginResponseBuilder.userType(userType);

            final String newToken = jwtService.generateToken(user.getId(), user.getUserType());

            loginResponseBuilder.token(newToken);
        }

        return loginResponseBuilder.build();
    }
}



