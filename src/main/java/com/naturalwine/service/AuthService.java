package com.naturalwine.service;

import com.naturalwine.dto.*;
import com.naturalwine.entity.UserEntity;
import com.naturalwine.model.UserType;
import com.naturalwine.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

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
        return new UserResponse(guestUUID, null, token, UserType.GUEST);
    }

    public LoginResponse login(LoginRequest loginRequest) {
        UserEntity user = userRepository.findByEmail(loginRequest.email())
                .orElseThrow(() -> new IllegalArgumentException("Invalid email or password"));

        if (!passwordEncoder.matches(loginRequest.password(), user.getPassword())) {
            throw new IllegalArgumentException("Invalid email or password");
        }

        String token = jwtService.generateToken(user.getId(), user.getUserType());

        // Migrate guest cart to registered user if guestId provided
        if (loginRequest.guestUuid() != null) {
            cartService.migrateGuestCartToRegisteredUser(loginRequest.guestUuid(), user.getUuid());
        }

        return new LoginResponse(
            user.getUuid(),
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
            user.getEmail(),
            token,
            user.getUserType()
        );
    }
}



