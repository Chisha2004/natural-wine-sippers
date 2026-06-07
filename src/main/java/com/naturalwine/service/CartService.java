package com.naturalwine.service;

import com.naturalwine.dto.CartDto;
import com.naturalwine.entity.BeverageEntity;
import com.naturalwine.entity.CartEntity;
import com.naturalwine.exception.BeverageNotFoundException;
import com.naturalwine.exception.InsufficientStockException;
import com.naturalwine.repository.BeverageRepository;
import com.naturalwine.repository.CartRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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
     * @throws IllegalArgumentException if beverage not found or insufficient stock
     */
    public void addToCart(final Long userId, final Long beverageId, final Integer quantity) throws InsufficientStockException, IllegalArgumentException {
        // Validate inputs
        if (quantity <= 0) {
            throw new IllegalArgumentException("Quantity must be greater than 0");
        }

        // Fetch the beverage and check stock
        BeverageEntity beverage = beverageRepository.findById(beverageId)
                .orElseThrow(() -> new BeverageNotFoundException(beverageId));

        if (beverage.getStock() < quantity) {
            throw new InsufficientStockException(beverageId, beverage.getStock(), quantity);
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
                throw new InsufficientStockException(beverageId, beverage.getStock(), newQuantity);
            }

            cartEntity.setQuantity(newQuantity);
        } else {
            // Create new cart item
            cartEntity = new CartEntity();
            cartEntity.setUserId(userId);
            cartEntity.setBeverageId(beverageId);
            cartEntity.setQuantity(quantity);
        }

        cartEntity.setDlu(LocalDateTime.now());
        cartRepository.save(cartEntity);
    }

    /**
     * Gets all cart items for a specific user
     *
     * @param userId the ID of the user
     * @return list of CartDto items in the user's cart
     */
    public List<CartDto> getUserCart(final Long userId) {
        return cartRepository.findByUserId(userId)
                .stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    private CartDto convertToDto(final CartEntity cartEntity) throws BeverageNotFoundException {
        if (cartEntity == null) {
            return null;
        }

        final BeverageEntity beverage = beverageRepository.findById(cartEntity.getBeverageId())
                .orElseThrow(() -> new BeverageNotFoundException(cartEntity.getBeverageId()));

        return new CartDto(
                cartEntity.getBeverageId(),
                beverage.getImgUrl(),
                cartEntity.getQuantity(),
                beverage.getPrice(),
                beverage.getPrice().multiply(BigDecimal.valueOf(cartEntity.getQuantity()))
        );
    }
}
