package com.naturalwine.service;

import com.naturalwine.dto.CheckoutRequest;
import com.naturalwine.dto.CheckoutResponseDto;
import com.naturalwine.dto.ShippingAddressDto;
import com.naturalwine.entity.*;
import com.naturalwine.exception.CartAccessDeniedException;
import com.naturalwine.exception.OrderNotFoundException;
import com.naturalwine.repository.OrderRepository;
import com.naturalwine.repository.DefaultShippingAddressRepo;
import com.naturalwine.service.payment.PaymentService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.security.SecureRandom;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class CheckoutService {
    private static final String ALPHANUMERIC = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ"; // Omitted confusing characters like 0, 1, O, I
    private static final SecureRandom RANDOM = new SecureRandom();
    private static final DateTimeFormatter DATE_FORMATTER = DateTimeFormatter.ofPattern("yyyyMMdd");

    private final CartService cartService;
    private final PaymentService paymentService;
    private final OrderRepository orderRepository;
    private final DefaultShippingAddressRepo defaultShippingAddressRepo;

    public CheckoutService(CartService cartService,
                           PaymentService paymentService,
                           OrderRepository orderRepository,
                           DefaultShippingAddressRepo defaultShippingAddressRepo) {
        this.cartService = cartService;
        this.paymentService = paymentService;
        this.orderRepository = orderRepository;
        this.defaultShippingAddressRepo = defaultShippingAddressRepo;
    }

    @Transactional
    public CheckoutResponseDto processCheckout(final UUID userUuid, final CheckoutRequest request) {

        final Cart cart = cartService.getCartById(request.cartId(), userUuid);

        if(!cart.getUserUuid().equals(userUuid)) {
            throw new CartAccessDeniedException(cart.getId(), userUuid);
        }

        final Order order = orderRepository.findByCartId(cart.getId()).orElseGet(() -> {
            Order newOrder = Order.builder()
                    .orderNumber(generateOrderId())
                    .userId(userUuid)
                    .cartId(cart.getId())
                    .shippingFirstName(request.shipmentAddress().firstName())
                    .shippingLastName(request.shipmentAddress().lastName())
                    .shippingStreetAddress(request.shipmentAddress().streetName())
                    .shippingHouseNumber(request.shipmentAddress().houseNumber())//TODO need to add phone number
                    .shippingPostalCode(request.shipmentAddress().postcode())
                    .shippingCity(request.shipmentAddress().city())
                    .shippingCountry(request.shipmentAddress().country())
                    .status(OrderStatus.AWAITING_PAYMENT)
                    .subtotalAmount(cart.getTotalPrice())
                    .totalAmount(cart.getTotalPrice()) //TODO confirm from cart if we show sub total then if needed + shipping + vat to form totalAmount
                    .shippingAmount(new BigDecimal(0)) //TODO now hardcoded to 0 till frontend can send a breakdown of the shippingAmount which could also be 0 for free shipping
                    .paymentMethod(request.paymentMethod())
                    .build();

            final List<OrderItem> orderItems = createOrderItems(cart);
            orderItems.forEach(orderItem -> orderItem.setOrder(newOrder));
            newOrder.setOrderItems(orderItems);
            orderRepository.save(newOrder);

            return newOrder;
        });

        cartService.updateStatus(cart, CartStatus.IN_CHECKOUT);

        final String url = paymentService.generatePaymentUrl(request.paymentMethod(), order);

        //TODO do not start a new transaction without checking existing. If payment method has changed from previous then start new or if no transaction already exists in pending
        //TODO payment method should be used at transaction level

        //TODO we need a thread executor which should be checking on transactions and update completed payments.

        setDefaultAddressIfNotSet(userUuid, request.shipmentAddress());
        //TODO once an order is fully paid we should delete or empty the cart and can be reused for the future

        return new CheckoutResponseDto(url, order.getId(), order.getStatus());
    }

    public CheckoutResponseDto checkStatus(final UUID userUuid, final Long orderId) {

        Order order = orderRepository.findById(orderId).orElseThrow(() -> new OrderNotFoundException(orderId));
        Cart cart = cartService.getCartById(order.getCartId(), userUuid);

        if(order.getStatus() == OrderStatus.AWAITING_PAYMENT) {
            //TODO Check for transaction and query payment gateway for the status then update order if status has changed as well as update cart

        }

        //else return
        return CheckoutResponseDto.builder()
                .orderId(order.getId())
                .orderStatus(order.getStatus()).build();

    }

    private List<OrderItem> createOrderItems(Cart cart) {
        return cart.getItems().stream()
                .map(cartItem -> OrderItem.builder()
                            .beverageId(cartItem.getBeverageId())
                            .quantity(cartItem.getQuantity())
                            .unitPrice(cartItem.getPriceEach())
                            .totalPrice(cartItem.getTotalForQuantity())
                            .build())
                .collect(Collectors.toCollection(ArrayList::new));
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

    public ShippingAddressDto getDefaultShippingAddress(UUID userUuid) {
      return defaultShippingAddressRepo.findByUserUuid(userUuid)
              .map( defaultShippingAddress -> ShippingAddressDto.builder()
              .firstName(defaultShippingAddress.getFirstName())
              .lastName(defaultShippingAddress.getLastName())
              .streetName(defaultShippingAddress.getStreetName())
              .houseNumber(defaultShippingAddress.getHouseNumber())
              .postcode(defaultShippingAddress.getPostcode())
              .city(defaultShippingAddress.getCity())
              .country(defaultShippingAddress.getCountry())
              .build()
              )
              .orElse(null);
    }

    @Transactional
    public void finalizeCartForPaidOrder(UUID userUuid, Cart cart, final Order order) {
        //TODO need to clear cart or delete cart and cartItems
    }

    private void setDefaultAddressIfNotSet(UUID userUuid, ShippingAddressDto shipmentAddress) {
        if(getDefaultShippingAddress(userUuid) == null) {
            DefaultShippingAddress defaultShippingAddress = DefaultShippingAddress.builder()
                    .userUuid(userUuid)
                    .firstName(shipmentAddress.firstName())
                    .lastName(shipmentAddress.lastName())
                    .streetName(shipmentAddress.streetName())
                    .houseNumber(shipmentAddress.houseNumber())
                    .postcode(shipmentAddress.postcode())
                    .city(shipmentAddress.city())
                    .country(shipmentAddress.country())
                    .build();

            defaultShippingAddressRepo.save(defaultShippingAddress);
        }
    }
}
