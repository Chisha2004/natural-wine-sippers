package com.naturalwine.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "cart")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private UUID userUuid;

    @Column(nullable = false)
    private Long beverageId;

    @Column(nullable = false)
    private Integer quantity;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false, length = 30)
    private CartStatus status;

    @Column(name = "doe", nullable = false, updatable = false)
    private LocalDateTime doe = LocalDateTime.now();

    @Column(name = "dlu", nullable = false)
    private LocalDateTime dlu = LocalDateTime.now();

    @PreUpdate
    protected void onUpdate() {
        dlu = LocalDateTime.now();
    }
}


