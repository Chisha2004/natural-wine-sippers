package com.naturalwine.service;

import com.naturalwine.dto.CartItemDto;
import com.naturalwine.dto.CartResponse;
import com.naturalwine.entity.Beverage;
import com.naturalwine.entity.Cart;
import com.naturalwine.entity.CartItem;
import com.naturalwine.entity.CartStatus;
import com.naturalwine.exception.BeverageNotFoundException;
import com.naturalwine.exception.InsufficientStockException;
import com.naturalwine.repository.BeverageRepository;
import com.naturalwine.repository.CartRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
public class CartService {
    private final CartRepository cartRepository;
    private final BeverageRepository beverageRepository;

    public CartService(CartRepository cartRepository, BeverageRepository beverageRepository) {
        this.cartRepository = cartRepository;
        this.beverageRepository = beverageRepository;
    }

    @Transactional
    public void addToCart(final UUID userUuid, final Long beverageId, final Integer quantity)
            throws InsufficientStockException, IllegalArgumentException {

        //TODO if payment is in progress and successfull then we should not add to it but create new cart.
        //TODO if the order is in progress and payment is not yet made then we need to invalidate this order and create a new

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
        final Cart cart = cartRepository.findByUserUuid(userUuid)
                .orElseGet(()-> Cart.builder()
                        .userUuid(userUuid)
                        .items(new ArrayList<>())
                        .build());
        if(cart.getItems() != null) {
            cart.getItems().stream()
                    .filter(item -> item.getBeverageId().equals(beverageId))
                    .findFirst()
                    .ifPresentOrElse(existingCartItem -> {
                                // Update existing cart item
                                int newQuantity = existingCartItem.getQuantity() + quantity;

                                if (beverage.getStock() < newQuantity) {
                                    throw new InsufficientStockException(beverageId, beverage.getStock(), newQuantity);
                                }
                                existingCartItem.setQuantity(newQuantity);
                                updateQuantityAndPriceEach(existingCartItem, newQuantity, beverage);
                            },
                            () -> {
                                CartItem cartItem = updateQuantityAndPriceEach(CartItem.builder()
                                        .beverageId(beverageId)
                                        .build(), quantity, beverage);
                                cart.addItem(cartItem);
                            });

        }
        cart.setStatus(CartStatus.ACTIVE);
        cart.setDlu(LocalDateTime.now());
        cartRepository.save(cart);
    }

    public Cart getCart(final UUID userUuid) {
        Cart cart = cartRepository.findByUserUuid(userUuid).orElseGet(() -> {
            Cart newCart = new Cart();
            newCart.setStatus(CartStatus.NONE);
            newCart.setItems(List.of());
            newCart.setUserUuid(userUuid);
            return newCart;
        });

        if (cart.getItems() != null && !cart.getItems().isEmpty()) {
            final List<Beverage> beverages = beverageRepository.findAll();
            cart.getItems().stream()
                    .forEach(item -> {
                        final Beverage beverage = beverages.stream()
                                .filter(b -> b.getId().equals(item.getBeverageId()))
                                .findFirst()
                                .orElse(null);
                        if (beverage != null) {
                            item.setPriceEach(beverage.getPrice());
                            item.setTotalForQuantity(beverage.getPrice()
                                    .multiply(BigDecimal.valueOf(item.getQuantity())));
                        }
                    });
            //TODO future add VAT and any other added bits to price, bonus, etc
            cart.setTotalPrice(cart.getItems().stream()
                    .map(CartItem::getTotalForQuantity)
                    .reduce(BigDecimal.ZERO, BigDecimal::add));
        }

        return cart;
    }

    public CartResponse getCartResponse(final UUID userUuid) {
        final Cart cart = getCart(userUuid);

        return CartResponse.builder()
                .id(cart.getId())
                .items(cart.getItems()
                        .stream()
                        .map(this::convertToDto)
                        .collect(Collectors.toList()))
                .totalPrice(cart.getTotalPrice())
                .build();
    }

    @Transactional
    public void migrateGuestCartToRegisteredUser(final UUID guestUuid, final UUID registeredUserUuid) {
        final Optional<Cart> guestCartOpt = cartRepository.findByUserUuid(guestUuid);

        if (guestCartOpt.isEmpty()) {
            return;
        }

        final Cart guestCart = guestCartOpt.get();
        final Optional<Cart> userCartOpt = cartRepository.findByUserUuid(registeredUserUuid);

        if (userCartOpt.isPresent()) {
            final Cart userCart = userCartOpt.get();

            mergeCartItems(guestCart, userCart);

            // Remove old guest cart
            cartRepository.delete(guestCart);
            cartRepository.saveAndFlush(userCart);
            //TODO save here is not updating owner
        } else {
            // Simple ownership transfer
            guestCart.setUserUuid(registeredUserUuid);
            cartRepository.saveAndFlush(guestCart);
        }
    }

    private void mergeCartItems(final Cart guestCart, final Cart userCart) {
        // Map existing user items by Product/Wine ID for fast lookup
        final Map<Long, CartItem> userItemMap = userCart.getItems().stream()
                .collect(Collectors.toMap(
                        item -> item.getBeverageId(),
                        Function.identity()
                ));

        for (final CartItem guestItem : guestCart.getItems()) {
            final Long productId = guestItem.getBeverageId();

            if (userItemMap.containsKey(productId)) {
                // Match found: update quantity on existing item
                final CartItem existingItem = userItemMap.get(productId);
                existingItem.setQuantity(existingItem.getQuantity() + guestItem.getQuantity());
            } else {
                // No match: reassign guest item to the target user cart
                guestItem.setCart(userCart);
                userCart.getItems().add(guestItem);
            }
        }
    }

    private CartItemDto convertToDto(final CartItem cartItem) throws BeverageNotFoundException {
        if (cartItem == null) {
            return null;
        }

        final Beverage beverage = beverageRepository.findById(cartItem.getBeverageId())
                .orElseThrow(() -> new BeverageNotFoundException(cartItem.getBeverageId()));

        return new CartItemDto(
                cartItem.getBeverageId(),
                beverage.getName(),
                beverage.getImgUrl(),
                cartItem.getQuantity(),
                cartItem.getPriceEach(),
                cartItem.getTotalForQuantity()
        );
    }

    private static CartItem updateQuantityAndPriceEach(final CartItem cartItem, final int newQuantity, Beverage beverage) {
        cartItem.setQuantity(newQuantity);
        cartItem.setPriceEach(beverage.getPrice());
        cartItem.setTotalForQuantity(beverage.getPrice().multiply(BigDecimal.valueOf(newQuantity)));
        return cartItem;
    }
}


