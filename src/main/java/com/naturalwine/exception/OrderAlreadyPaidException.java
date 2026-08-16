package com.naturalwine.exception;

public class OrderAlreadyPaidException extends RuntimeException {
    public OrderAlreadyPaidException(Long orderId) {
        super("Order " + orderId + " is already paid.");
    }
}
