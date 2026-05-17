package com.naturalwine.dto;

public record LoginResponse(
    Long userId,
    String email,
    String token
) {
}

