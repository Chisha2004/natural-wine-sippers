package com.naturalwine.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.naturalwine.validation.ValidUuidLength;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

@JsonIgnoreProperties(ignoreUnknown = true)
public record LoginRequest(
    @NotBlank(message = "Email cannot be empty")
    @Email(message = "Invalid email format")
    String email,

    @NotBlank(message = "Password cannot be empty")
    String password,

    @ValidUuidLength
    String guestUuid //optional
) {
}

