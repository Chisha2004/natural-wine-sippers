package com.naturalwine.exception;

public enum ErrorCode {
    BEVERAGE_NOT_FOUND("BEVERAGE_NOT_FOUND", "Beverage not found"),
    INSUFFICIENT_STOCK("INSUFFICIENT_STOCK", "Insufficient stock available"),
    INVALID_INPUT("INVALID_INPUT", "Invalid input provided"),
    INTERNAL_ERROR("INTERNAL_ERROR", "An unexpected error occurred"),
    UNAUTHORIZED("UNAUTHORIZED", "Unauthorized access"),
    FORBIDDEN("FORBIDDEN", "Forbidden access"),
    NOT_FOUND("NOT_FOUND", "Resource not found"),
    CONFLICT("CONFLICT", "Resource conflict");

    private final String code;
    private final String message;

    ErrorCode(String code, String message) {
        this.code = code;
        this.message = message;
    }

    public String getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }
}

