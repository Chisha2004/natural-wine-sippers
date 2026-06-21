package com.naturalwine.dto;

import com.naturalwine.model.UserType;
import lombok.Builder;

import java.util.UUID;

@Builder
public record UserResponse(UUID uuid,
                           String email,
                           String token,
                           UserType userType) {
}
