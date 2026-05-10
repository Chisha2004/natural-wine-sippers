package com.naturalwine.controller;

import com.naturalwine.dto.CartDto;
import com.naturalwine.service.CartService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/cart")
public class CartController {
    private final CartService cartService;

    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    /**
     * Add a beverage to the user's cart
     *
     * @param userId the ID of the user
     * @param beverageId the ID of the beverage
     * @param quantity the quantity to add
     * @return the created/updated cart item
     */
    @PostMapping("/add")
    public ResponseEntity<CartDto> addToCart(
            @RequestParam Long userId,
            @RequestParam Long beverageId,
            @RequestParam Integer quantity) {
        try {
            //TODO userId should be read from header or auth token
            CartDto cartDto = cartService.addToCart(userId, beverageId, quantity);
            return ResponseEntity.status(HttpStatus.CREATED).body(cartDto);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().build();
        }
    }
}

