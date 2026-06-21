package com.naturalwine.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.UUID;

@JsonIgnoreProperties(ignoreUnknown = true)
public record LoginRequest(
    String email,
    String password,
    UUID guestUuid //optional
) {
}

