package com.naturalwine.exception;

import java.util.UUID;

public class CartAccessDeniedException extends RuntimeException {
    public CartAccessDeniedException(Long cartId, UUID userUuid) {
        super(String.format("Cart ID: %d is not owned by: %s", cartId, userUuid));
    }
}
