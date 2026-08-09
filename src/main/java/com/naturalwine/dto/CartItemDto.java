package com.naturalwine.dto;

import java.math.BigDecimal;

public record CartItemDto(
        Long beverageId,
        String title,
        String beverageImgUrl,
        Integer quantity,
        BigDecimal priceEach,
        BigDecimal totalForQuantity
) {}

