package com.naturalwine.util;

import com.naturalwine.dto.CartDto;

import java.math.BigDecimal;
import java.util.List;

public class CartUtil {
    public static BigDecimal calculateTotalPriceByQuantity(List<CartDto> items) {
        return items.stream()
                .map(CartDto::totalForQuantity)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }
}
