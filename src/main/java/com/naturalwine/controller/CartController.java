package com.naturalwine.controller;

import com.naturalwine.dto.AddToCartRequest;
import com.naturalwine.dto.CartDto;
import com.naturalwine.service.CartService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
     * @param request contains userId, beverageId, and quantity
     * @return the complete cart for the user
     */
    @PostMapping("/add")
    public ResponseEntity<List<CartDto>> addToCart(@RequestBody AddToCartRequest request) {
        //TODO userId should be read from header or auth token
        cartService.addToCart(request.userId(), request.beverageId(), request.quantity());

        // Get the updated cart for the user
        List<CartDto> userCart = cartService.getUserCart(request.userId());

        return ResponseEntity.status(HttpStatus.OK).body(userCart);
    }
}
