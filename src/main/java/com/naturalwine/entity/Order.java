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
@Table(
        name = "orders",
        indexes = {
                @Index(name = "idx_orders_user_id", columnList = "user_id"),
                @Index(name = "idx_orders_order_number", columnList = "order_number", unique = true),
                @Index(name = "idx_orders_status", columnList = "status")
        }
)
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
    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false, length = 30)
    private OrderStatus status;

    @NotBlank
    @Size(max = 50)
    @Column(name = "payment_method", nullable = false, length = 50)
    private String paymentMethod; // e.g. "ideal", "paypal", "bancontact"

    @Column(name = "payment_transaction_id")
    private String paymentTransactionId;

    @NotNull
    @PositiveOrZero
    @Column(name = "subtotal_amount", nullable = false, precision = 10, scale = 2)
    private BigDecimal subtotalAmount;

    @NotNull
    @PositiveOrZero
    @Column(name = "shipping_amount", nullable = false, precision = 10, scale = 2)
    private BigDecimal shippingAmount;

    @NotNull
    @PositiveOrZero
    @Column(name = "total_amount", nullable = false, precision = 10, scale = 2)
    private BigDecimal totalAmount;

    @NotBlank
    @Size(max = 3)
    @Column(name = "currency", nullable = false, length = 3)
    private String currency;

    @NotBlank
    @Size(max = 255)
    @Column(name = "shipping_street_address", nullable = false)
    private String shippingStreetAddress;

    @NotBlank
    @Size(max = 20)
    @Column(name = "shipping_postal_code", nullable = false, length = 20)
    private String shippingPostalCode;

    @NotBlank
    @Size(max = 100)
    @Column(name = "shipping_city", nullable = false, length = 100)
    private String shippingCity;

    @NotBlank
    @Size(max = 100)
    @Column(name = "shipping_country", nullable = false, length = 100)
    private String shippingCountry;

    @Builder.Default
    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<OrderItem> items = new ArrayList<>();

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
        if (this.status == null) {
            this.status = OrderStatus.PENDING;
        }
    }

    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = LocalDateTime.now();
    }

    //TODO this should move to a service
    public void addItem(OrderItem item) {
        items.add(item);
    }

    //TODO this should move to a service
    public void removeItem(OrderItem item) {
        items.remove(item);
    }
}
