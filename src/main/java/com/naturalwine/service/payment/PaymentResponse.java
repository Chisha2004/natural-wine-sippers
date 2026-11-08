package com.naturalwine.service.payment;

import lombok.Builder;

@Builder
public record PaymentResponse(
        String transactionId,
        String redirectUrl,
        String rawResponse
) {}
