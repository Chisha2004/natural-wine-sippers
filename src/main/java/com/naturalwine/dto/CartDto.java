package com.naturalwine.dto;

import java.time.LocalDateTime;

public record CartDto(
        Long id,
        Long userId,
        Long beverageId,
        Integer quantity,
        LocalDateTime doe,
        LocalDateTime dlu
) {}

