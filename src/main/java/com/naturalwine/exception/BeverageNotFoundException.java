package com.naturalwine.exception;

public class BeverageNotFoundException extends RuntimeException {
    private final Long beverageId;

    public BeverageNotFoundException(Long beverageId) {
        super(String.format("Beverage not found with ID: %d", beverageId));
        this.beverageId = beverageId;
    }

    public BeverageNotFoundException(String message) {
        super(message);
        this.beverageId = null;
    }

    public BeverageNotFoundException(String message, Throwable cause) {
        super(message, cause);
        this.beverageId = null;
    }

    public Long getBeverageId() {
        return beverageId;
    }
}


