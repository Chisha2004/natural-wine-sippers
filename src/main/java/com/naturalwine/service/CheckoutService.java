package com.naturalwine.service;

import com.naturalwine.dto.CheckoutRequest;
import com.naturalwine.dto.CheckoutResponseDto;
import com.naturalwine.dto.ShippingAddressDto;
import com.naturalwine.entity.Cart;
import com.naturalwine.entity.CartStatus;
import com.naturalwine.entity.Order;
import com.naturalwine.entity.OrderStatus;
import com.naturalwine.exception.CartAccessDeniedException;
import com.naturalwine.repository.OrderRepository;
import com.naturalwine.repository.DefaultShippingAddressRepo;
import com.naturalwine.service.payment.PaymentService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
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

        final Cart cart = cartService.getCartById(request.cartId());

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
                    .status(OrderStatus.PENDING)
                    .subtotalAmount(cart.getTotalPrice())
                    .totalAmount(cart.getTotalPrice()) //TODO confirm from cart if we show sub total then if needed + shipping + vat to form totalAmount
                    .shippingAmount(new BigDecimal(0)) //TODO now hardcoded to 0 till frontend can send a breakdown of the shippingAmount which could also be 0 for free shipping
                    .paymentMethod(request.paymentMethod())
                    .build();

            orderRepository.save(newOrder);

            return newOrder;
        });

        cartService.updateStatus(cart, CartStatus.IN_CHECKOUT);

        paymentService.generatePaymentUrl(request.paymentMethod(), order);

        //TODO do not start a new transaction without checking existing. If payment method has changed from previous then start new or if no transaction already exists in pending
        //TODO payment method should be used at transaction level

        String url = "http://localhost:8080/checkout"; //TODO add
        //TODO we need a thread executor which should be checking on transactions and update completed payments.

        return new CheckoutResponseDto(url, order.getId());
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
              .postcode(defaultShippingAddress.getPostcode())
              .city(defaultShippingAddress.getCity())
              .country(defaultShippingAddress.getCountry())
              .build()
              )
              .orElse(null);
    }
}
