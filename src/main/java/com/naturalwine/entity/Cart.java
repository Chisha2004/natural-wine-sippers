package com.naturalwine.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Table(name = "cart")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JdbcTypeCode(SqlTypes.VARCHAR)
    @Column(nullable = false, length = 36, updatable = false)
    private UUID userUuid;

    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CartItem> items =  new ArrayList<>();

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false, length = 30)
    private CartStatus status;

    @Column(name = "doe", nullable = false, updatable = false)
    private LocalDateTime doe = LocalDateTime.now();

    @Column(name = "dlu", nullable = false)
    private LocalDateTime dlu = LocalDateTime.now();

    @Transient
    private BigDecimal totalPrice = BigDecimal.ZERO;

    public void addItem(CartItem item) {
        this.items.add(item);
        item.setCart(this);
    }

    public void removeItem(CartItem item) {
        this.items.remove(item);
        item.setCart(null);
    }

    @PreUpdate
    protected void onUpdate() {
        dlu = LocalDateTime.now();
    }
}


