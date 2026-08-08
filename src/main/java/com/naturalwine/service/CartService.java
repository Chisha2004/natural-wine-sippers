package com.naturalwine.service;

import com.naturalwine.dto.CartDto;
import com.naturalwine.entity.Beverage;
import com.naturalwine.entity.Cart;
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
        Beverage beverage = beverageRepository.findById(beverageId)
                .orElseThrow(() -> new BeverageNotFoundException(beverageId));

        if (beverage.getStock() < quantity) {
            throw new InsufficientStockException(beverageId, beverage.getStock(), quantity);
        }

        // Check if item already exists in cart (find by userUuid string and beverageId)
        Optional<Cart> existingCartItem = cartRepository.findByUserUuidAndBeverageId(userUuid, beverageId);

        Cart cart;
        if (existingCartItem.isPresent()) {
            // Update existing cart item
            cart = existingCartItem.get();
            int newQuantity = cart.getQuantity() + quantity;

            // Check if new quantity exceeds available stock
            if (beverage.getStock() < newQuantity) {
                throw new InsufficientStockException(beverageId, beverage.getStock(), newQuantity);
            }

            cart.setQuantity(newQuantity);
        } else {
            // Create new cart item
            cart = new Cart();
            // Store userUuid as is (works for both numeric and UUID)
            cart.setUserUuid(userUuid);
            cart.setBeverageId(beverageId);
            cart.setQuantity(quantity);
        }

        cart.setDlu(LocalDateTime.now());
        cartRepository.save(cart);
    }

    public List<CartDto> getUserCart(final UUID userUuid) {
        return cartRepository.findByUserUuid(userUuid)
                .stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    @Transactional
    public void migrateGuestCartToRegisteredUser(final UUID guestUuid, final UUID registeredUserUuid) {
        List<Cart> guestCartItems = cartRepository.findByUserUuid(guestUuid);

        for (Cart guestItem : guestCartItems) {
            // Check if registered user already has this item in cart
            Optional<Cart> existingItem = cartRepository.findByUserUuidAndBeverageId(
                    registeredUserUuid,
                    guestItem.getBeverageId()
            );

            if (existingItem.isPresent()) {
                // Merge quantities
                Cart registered = existingItem.get();
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

    private CartDto convertToDto(final Cart cart) throws BeverageNotFoundException {
        if (cart == null) {
            return null;
        }

        final Beverage beverage = beverageRepository.findById(cart.getBeverageId())
                .orElseThrow(() -> new BeverageNotFoundException(cart.getBeverageId()));

        return new CartDto(
                cart.getBeverageId(),
                beverage.getName(),
                beverage.getImgUrl(),
                cart.getQuantity(),
                beverage.getPrice(),
                beverage.getPrice().multiply(BigDecimal.valueOf(cart.getQuantity()))
        );
    }
}


