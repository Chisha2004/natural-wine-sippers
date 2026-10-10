package com.naturalwine.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "orders") //TODO maybe these indexes should move to mysql not in code.
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 64)
    @Column(name = "order_number", nullable = false, unique = true, length = 64)
    private String orderNumber;

    @NotNull
    @Column(name = "user_id", nullable = false, updatable = false)
    private UUID userId;

    @NotNull
    @Column(name = "cart_id", nullable = false, updatable = false, unique = true)
    private Long cartId;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false, length = 30)
    private OrderStatus status;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "payment_method", nullable = false, length = 30)
    private PaymentMethod paymentMethod;

    @PositiveOrZero
    @Column(name = "subtotal_amount", nullable = false, precision = 10, scale = 2)
    private BigDecimal subtotalAmount;

    @PositiveOrZero
    @Column(name = "shipping_amount", precision = 10, scale = 2)
    private BigDecimal shippingAmount;

    @NotNull
    @PositiveOrZero
    @Column(name = "total_amount", nullable = false, precision = 10, scale = 2)
    private BigDecimal totalAmount;

    @NotBlank
    @Size(max = 255)
    @Column(name = "shipping_first_name", nullable = false)
    private String shippingFirstName;

    @NotBlank
    @Size(max = 255)
    @Column(name = "shipping_last_name", nullable = false)
    private String shippingLastName;

    @NotBlank
    @Size(max = 255)
    @Column(name = "shipping_street_address", nullable = false)
    private String shippingStreetAddress;

    @NotBlank
    @Size(max = 10)
    @Column(name = "shipping_house_number", nullable = false)
    private String shippingHouseNumber;

    @NotBlank
    @Size(max = 10)
    @Column(name = "shipping_postal_code", nullable = false)
    private String shippingPostalCode;

    @NotBlank
    @Size(max = 225)
    @Column(name = "shipping_city", nullable = false)
    private String shippingCity;

    @NotBlank
    @Size(max = 225)
    @Column(name = "shipping_country", nullable = false)
    private String shippingCountry;

    @Size(max = 15)
    @Column(name = "shipping_phone_number")
    private String shippingPhoneNumber; //phone number can be string for now till we have a proper phone number class

    @Column(name = "doe", nullable = false, updatable = false)
    private LocalDateTime doe;

    @Column(name = "dlu")
    private LocalDateTime dlu;

    @Builder.Default
    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderItem> orderItems = new ArrayList<>();

    @PrePersist
    protected void onCreate() {
        this.doe = LocalDateTime.now();
        if (this.status == null) {
            this.status = OrderStatus.AWAITING_PAYMENT;
        }
    }

    @PreUpdate
    protected void onUpdate() {
        this.dlu = LocalDateTime.now();
    }
}
