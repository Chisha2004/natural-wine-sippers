package com.naturalwine.dto;

import com.naturalwine.entity.OrderStatus;
import lombok.Builder;

@Builder
public record CheckoutResponseDto(String paymentRedirectUrl, Long orderId, OrderStatus orderStatus) {
}
