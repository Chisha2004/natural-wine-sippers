package com.naturalwine.controller;

import com.naturalwine.dto.AddToCartRequest;
import com.naturalwine.dto.AddToCartResponse;
import com.naturalwine.dto.CartDto;
import com.naturalwine.service.CartService;
import com.naturalwine.util.CartUtil;
import com.naturalwine.util.SecurityUtil;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
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
     * @param request contains beverageId and quantity
     * @return the complete cart for the user
     */
    @PostMapping("/add")
    public AddToCartResponse addToCart(@RequestBody AddToCartRequest request) {
        Long userId = SecurityUtil.getCurrentUserId();
        cartService.addToCart(userId, request.beverageId(), request.quantity());

        List<CartDto> items = cartService.getUserCart(userId);
        BigDecimal totalPrice = CartUtil.calculateTotalPriceByQuantity(items);

        return new AddToCartResponse(items, totalPrice);
    }
}
