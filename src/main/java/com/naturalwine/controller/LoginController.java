package com.naturalwine.controller;

import com.naturalwine.dto.*;
import com.naturalwine.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/v1/auth")
public class LoginController {
    private final AuthService authService;

    public LoginController(AuthService authService) {
        this.authService = authService;
    }

    @GetMapping("/generate-quest-user")
    public ResponseEntity<UserResponse> generateGuestUser() {
        UserResponse response = authService.generateGuestUser();
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @PostMapping("/login")
    public LoginResponse login(
            @Valid @RequestBody LoginRequest loginRequest) {
        return authService.login(loginRequest);
    }

    @PostMapping("/register")
    public ResponseEntity<UserResponse> register(
            @RequestParam String email,
            @RequestParam String password,
            @RequestParam(required = false) UUID guestUUID) {
        UserResponse response = authService.registerBasicUser(email, password, guestUUID);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}


