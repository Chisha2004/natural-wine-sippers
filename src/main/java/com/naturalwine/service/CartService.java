package com.naturalwine.service;

import com.naturalwine.dto.CartDto;
import com.naturalwine.entity.BeverageEntity;
import com.naturalwine.entity.CartEntity;
import com.naturalwine.exception.BeverageNotFoundException;
import com.naturalwine.exception.InsufficientStockException;
import com.naturalwine.repository.BeverageRepository;
import com.naturalwine.repository.CartRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class CartService {
    private final CartRepository cartRepository;
    private final BeverageRepository beverageRepository;

    public CartService(CartRepository cartRepository, BeverageRepository beverageRepository) {
        this.cartRepository = cartRepository;
        this.beverageRepository = beverageRepository;
    }

    public void addToCart(final UUID userUuid, final Long beverageId, final Integer quantity)
            throws InsufficientStockException, IllegalArgumentException {
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

        // Check if item already exists in cart (find by userUuid string and beverageId)
        Optional<CartEntity> existingCartItem = cartRepository.findByUserUuidAndBeverageId(userUuid, beverageId);

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
            // Store userUuid as is (works for both numeric and UUID)
            cartEntity.setUserUuid(userUuid);
            cartEntity.setBeverageId(beverageId);
            cartEntity.setQuantity(quantity);
        }

        cartEntity.setDlu(LocalDateTime.now());
        cartRepository.save(cartEntity);
    }

    public List<CartDto> getUserCart(final UUID userUuid) {
        return cartRepository.findByUserUuid(userUuid)
                .stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    @Transactional
    public void migrateGuestCartToRegisteredUser(final UUID guestUuid, final UUID registeredUserUuid) {
        List<CartEntity> guestCartItems = cartRepository.findByUserUuid(guestUuid);

        for (CartEntity guestItem : guestCartItems) {
            // Check if registered user already has this item in cart
            Optional<CartEntity> existingItem = cartRepository.findByUserUuidAndBeverageId(
                    registeredUserUuid,
                    guestItem.getBeverageId()
            );

            if (existingItem.isPresent()) {
                // Merge quantities
                CartEntity registered = existingItem.get();
                registered.setQuantity(registered.getQuantity() + guestItem.getQuantity());
                registered.setDlu(LocalDateTime.now());
                cartRepository.save(registered);
                // Delete guest item
            } else {
                // Transfer guest item to registered user
                guestItem.setUserUuid(registeredUserUuid);
                guestItem.setDlu(LocalDateTime.now());
            }
        }

        cartRepository.saveAll(guestCartItems);

        cartRepository.deleteAllByUserUuid(guestUuid);
    }

    public void clearUserCart(final UUID userUuid) {
        cartRepository.deleteAllByUserUuid(userUuid);
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


