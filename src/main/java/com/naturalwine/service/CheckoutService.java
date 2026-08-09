package com.naturalwine.service;

import com.naturalwine.dto.CheckoutRequestDto;
import com.naturalwine.dto.CheckoutResponseDto;
import com.naturalwine.entity.Cart;
import com.naturalwine.entity.Order;
import com.naturalwine.repository.OrderRepository;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.UUID;

@Service
public class CheckoutService {
    private static final String ALPHANUMERIC = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ"; // Omitted confusing characters like 0, 1, O, I
    private static final SecureRandom RANDOM = new SecureRandom();
    private static final DateTimeFormatter DATE_FORMATTER = DateTimeFormatter.ofPattern("yyyyMMdd");

    private final CartService cartService;
    private final PaymentService paymentService;
    private final OrderRepository orderRepository;

    public CheckoutService(CartService cartService, PaymentService paymentService, OrderRepository orderRepository) {
        this.cartService = cartService;
        this.paymentService = paymentService;
        this.orderRepository = orderRepository;
    }

    @Transactional
    public CheckoutResponseDto processCheckout(final UUID userUuid, final CheckoutRequestDto request) {

        final Cart cart = cartService.getCart(userUuid);

        final Order order = orderRepository.findByCartId(cart.getId()).orElseGet(() -> {
            Order newOrder = Order.builder()
                    .orderNumber(generateOrderId())
                    .userId(userUuid)
                    .cartId(cart.getId())
                    .build();

            orderRepository.save(newOrder);

            return newOrder;
        });

        //TODO do not start a new transaction without checking existing. If payment method has changed from previous then start new or if no transaction already exists in pending
        //TODO payment method should be used at transaction level

        String url = "http://localhost:8080/checkout"; //TODO add
        //TODO we need a thread executor which should be checking on transactions and update completed payments.

        return new CheckoutResponseDto(url);
    }

    private static String generateOrderId() {
        String datePart = LocalDate.now().format(DATE_FORMATTER);

        StringBuilder randomPart = new StringBuilder(4);
        for (int i = 0; i < 4; i++) {
            randomPart.append(ALPHANUMERIC.charAt(RANDOM.nextInt(ALPHANUMERIC.length())));
        }
        //TODO is this order number okay
        return String.format("ORD-%s-%s", datePart, randomPart);
    }
}
