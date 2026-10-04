package com.naturalwine.dto;

import com.naturalwine.entity.PaymentMethod;
import jakarta.validation.constraints.NotNull;

public record CheckoutRequest(
                                @NotNull(message = "cartId is required")
                                Long cartId,
                                @NotNull(message = "Payment method is required")
                                PaymentMethod paymentMethod,
                                @NotNull(message = "Shipping address is required")
                                ShippingAddressDto shipmentAddress) {
}
