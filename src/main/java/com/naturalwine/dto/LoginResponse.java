package com.naturalwine.dto;

import com.naturalwine.model.UserType;
import lombok.Builder;

import java.util.UUID;

@Builder
public record LoginResponse(
    UUID userUuid,
    String firstName,
    String lastName,
    String email,
    String token,
    UserType userType
) {
}