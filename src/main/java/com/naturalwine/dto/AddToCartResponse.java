package com.naturalwine.dto;

import java.math.BigDecimal;
import java.util.List;

public record AddToCartResponse (List<CartDto> items, BigDecimal totalPrice) {
}
