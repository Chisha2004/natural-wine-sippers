package com.naturalwine.exception;

public class CartNotFoundException extends RuntimeException {
    public CartNotFoundException(Long cartId) {
        super(String.format("Cart not found with ID: %d", cartId));
    }
}
