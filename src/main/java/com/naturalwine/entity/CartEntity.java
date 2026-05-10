package com.naturalwine.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name = "cart")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CartEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long userId;

    @Column(nullable = false)
    private Long beverageId;

    @Column(nullable = false)
    private Integer quantity;

    @Column(name = "doe", nullable = false, updatable = false)
    private LocalDateTime doe = LocalDateTime.now();

    @Column(name = "dlu", nullable = false)
    private LocalDateTime dlu = LocalDateTime.now();

    @PreUpdate
    protected void onUpdate() {
        dlu = LocalDateTime.now();
    }
}

