package com.naturalwine.dto;

import java.math.BigDecimal;

public record CartDto(
        Long beverageId,
        String beverageImgUrl,
        Integer quantity,
        BigDecimal priceEach,
        BigDecimal totalForQuantity
) {}

