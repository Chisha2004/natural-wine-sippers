package com.naturalwine.exception;

public class InsufficientStockException extends RuntimeException {
    private final Long beverageId;
    private final Integer available;
    private final Integer requested;

    public InsufficientStockException(Long beverageId, Integer available, Integer requested) {
        super(String.format("Insufficient stock for beverage ID %d. Available: %d, Requested: %d",
                beverageId, available, requested));
        this.beverageId = beverageId;
        this.available = available;
        this.requested = requested;
    }

    public Long getBeverageId() {
        return beverageId;
    }

    public Integer getAvailable() {
        return available;
    }

    public Integer getRequested() {
        return requested;
    }
}


