package com.naturalwine.dto;

import com.naturalwine.model.UserType;

import java.util.UUID;

public record LoginResponse(
    UUID userUuid,
    String email,
    String token,
    UserType userType
) {
}

