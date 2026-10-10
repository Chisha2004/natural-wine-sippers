package com.naturalwine.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Entity
@Table(name = "default_delivery_address")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DefaultShippingAddress {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "user_uuid", nullable = false, updatable = false)
    private UUID userUuid;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

    @Column(nullable = false)
    private String streetName;

    @Column(nullable = false)
    private String houseNumber;

    @Column(nullable = false)
    private String postcode;

    @Column(nullable = false)
    private String city;

    @Column(nullable = false)
    private String country;

}
