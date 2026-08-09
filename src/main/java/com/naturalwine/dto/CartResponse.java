package com.naturalwine.dto;

import lombok.Builder;

import java.math.BigDecimal;
import java.util.List;

@Builder
public record CartResponse(Long id,
                           List<CartItemDto> items,
                           BigDecimal totalPrice) {
}
