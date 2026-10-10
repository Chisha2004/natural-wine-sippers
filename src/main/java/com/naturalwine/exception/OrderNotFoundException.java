package com.naturalwine.exception;

public class OrderNotFoundException extends RuntimeException {
    public OrderNotFoundException(Long cartId) {
        super(String.format("Order not found with ID: %d", cartId));
    }
}
