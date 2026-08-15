package com.naturalwine.service.payment;

public record PaymentResponse(
        String transactionId,
        String redirectUrl
) {}
