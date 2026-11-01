package com.naturalwine.service.payment;

import lombok.Builder;

@Builder
public record PaymentResponse(
        String transactionId, //TODO rename this to referenceId rather
        String redirectUrl
) {}
