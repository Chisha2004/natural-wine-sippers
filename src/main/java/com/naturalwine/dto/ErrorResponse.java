package com.naturalwine.dto;

import java.time.LocalDateTime;

public record ErrorResponse(
    String errorCode,
    String errorType,
    String message,
    LocalDateTime timestamp
) {
}

