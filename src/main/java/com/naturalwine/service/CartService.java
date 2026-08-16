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
import java.util.List;
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
                        .build());

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
                },
                () -> {
                    cart.addItem(CartItem.builder()
                            .beverageId(beverageId)
                            .quantity(quantity)
                            .build());
                });

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
        final Cart cart = cartRepository.findByUserUuid(guestUuid).orElse(null);
        if (cart != null) {
            cart.setUserUuid(registeredUserUuid);
            cartRepository.save(cart);
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
}


