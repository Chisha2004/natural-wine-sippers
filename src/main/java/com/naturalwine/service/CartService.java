package com.naturalwine.service;

import com.naturalwine.dto.CartDto;
import com.naturalwine.entity.BeverageEntity;
import com.naturalwine.entity.CartEntity;
import com.naturalwine.repository.BeverageRepository;
import com.naturalwine.repository.CartRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class CartService {
    private final CartRepository cartRepository;
    private final BeverageRepository beverageRepository;

    public CartService(CartRepository cartRepository, BeverageRepository beverageRepository) {
        this.cartRepository = cartRepository;
        this.beverageRepository = beverageRepository;
    }

    /**
     * Adds a beverage to the user's cart.
     * Checks if sufficient stock is available for the requested quantity.
     *
     * @param userId the ID of the user
     * @param beverageId the ID of the beverage
     * @param quantity the quantity to add to cart
     * @return CartDto with the added item details
     * @throws IllegalArgumentException if beverage not found or insufficient stock
     */
    public CartDto addToCart(Long userId, Long beverageId, Integer quantity) {
        // Validate inputs
        if (quantity <= 0) {
            throw new IllegalArgumentException("Quantity must be greater than 0");
        }

        // Fetch the beverage and check stock
        BeverageEntity beverage = beverageRepository.findById(beverageId)
                .orElseThrow(() -> new IllegalArgumentException("Beverage not found with ID: " + beverageId));

        if (beverage.getStock() < quantity) {
            throw new IllegalArgumentException(
                    "Insufficient stock. Available: " + beverage.getStock() + ", Requested: " + quantity
            );
        }

        // Check if item already exists in cart
        Optional<CartEntity> existingCartItem = cartRepository.findByUserIdAndBeverageId(userId, beverageId);

        CartEntity cartEntity;
        if (existingCartItem.isPresent()) {
            // Update existing cart item
            cartEntity = existingCartItem.get();
            int newQuantity = cartEntity.getQuantity() + quantity;

            // Check if new quantity exceeds available stock
            if (beverage.getStock() < newQuantity) {
                throw new IllegalArgumentException(
                        "Insufficient stock for total quantity. Available: " + beverage.getStock() +
                        ", Requested total: " + newQuantity
                );
            }

            cartEntity.setQuantity(newQuantity);
            cartEntity.setDlu(LocalDateTime.now());
        } else {
            // Create new cart item
            cartEntity = new CartEntity();
            cartEntity.setUserId(userId);
            cartEntity.setBeverageId(beverageId);
            cartEntity.setQuantity(quantity);
            cartEntity.setDoe(LocalDateTime.now());
            cartEntity.setDlu(LocalDateTime.now());
        }

        CartEntity savedCartEntity = cartRepository.save(cartEntity);
        return convertToDto(savedCartEntity);
    }

    private CartDto convertToDto(CartEntity cartEntity) {
        if (cartEntity == null) {
            return null;
        }
        return new CartDto(
                cartEntity.getId(),
                cartEntity.getUserId(),
                cartEntity.getBeverageId(),
                cartEntity.getQuantity(),
                cartEntity.getDoe(),
                cartEntity.getDlu()
        );
    }
}
