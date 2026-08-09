package com.naturalwine.dto;

import com.naturalwine.entity.PaymentMethod;
import jakarta.validation.constraints.NotNull;

public record CheckoutRequestDto(
                                 @NotNull(message = "Cart id is required")
                                 String cartId,
                                 @NotNull(message = "Use default shipping address is required")
                                 boolean useDefaultShippingAddress,
                                 @NotNull(message = "Payment method is required")
                                 PaymentMethod paymentMethod,
                                 ShipmentAddress shipmentAddress) {
}
