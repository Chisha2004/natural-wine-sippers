package com.naturalwine.controller;

import com.naturalwine.dto.AddToCartRequest;
import com.naturalwine.dto.CartResponse;
import com.naturalwine.service.CartService;
import com.naturalwine.util.SecurityUtil;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/v1/cart")
public class CartController {
    private final CartService cartService;

    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @GetMapping("")
    public CartResponse getCart() {
        UUID userUuid = SecurityUtil.getCurrentUserUuid();

        return cartService.getCartResponse(userUuid);
    }

    @PostMapping("/add")
    public CartResponse addToCart(@RequestBody AddToCartRequest request) {
        UUID userUuid = SecurityUtil.getCurrentUserUuid();

        cartService.addToCart(userUuid, request.beverageId(), request.quantity());

        return cartService.getCartResponse(userUuid);
    }
}


