package com.naturalwine.dto;

public record LoginResponse(
    Long id,
    String email,
    String token
) {
}

