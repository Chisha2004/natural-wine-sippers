package com.naturalwine.entity;

import jakarta.persistence.*;
import lombok.Getter;

import java.math.BigDecimal;

@Entity
@Table(name = "beverages")
@Getter
public class BeverageEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String category;
    private String description;
    private String type;
    private String grapeVariety;
    private String country;
    private String region;
    private String vintage;
    private String degree;
    private Integer capacity;
    private Integer rating;
    private Integer year;
    private BigDecimal price;
    private String producer;

    @Column(name = "img_url")
    private String imgUrl; //TODO this should store the actual image in the table
}
