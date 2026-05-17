package com.naturalwine.service;

import com.naturalwine.dto.LoginRequest;
import com.naturalwine.dto.LoginResponse;
import com.naturalwine.entity.UserEntity;
import com.naturalwine.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtService jwtService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    /**
     * Authenticates a user and generates a JWT token
     *
     * @param loginRequest contains email and password
     * @return LoginResponse with user info and JWT token
     * @throws IllegalArgumentException if email not found or password is incorrect
     */
    public LoginResponse login(LoginRequest loginRequest) {
        UserEntity user = userRepository.findByEmail(loginRequest.email())
                .orElseThrow(() -> new IllegalArgumentException("Invalid email or password"));

        if (!passwordEncoder.matches(loginRequest.password(), user.getPassword())) {
            throw new IllegalArgumentException("Invalid email or password");
        }

        String token = jwtService.generateToken(user.getId());

        return new LoginResponse(
            user.getId(),
            user.getEmail(),
            token
        );
    }

    /**
     * Registers a new user
     *
     * @param email the user's email (used as username)
     * @param password the password (will be encoded)
     * @return the created user
     * @throws IllegalArgumentException if email already exists
     */
    public UserEntity register(String email, String password) {
        if (userRepository.findByEmail(email).isPresent()) {
            throw new IllegalArgumentException("Email already exists");
        }

        UserEntity user = new UserEntity(
            email,
            passwordEncoder.encode(password)
        );

        return userRepository.save(user);
    }
}

