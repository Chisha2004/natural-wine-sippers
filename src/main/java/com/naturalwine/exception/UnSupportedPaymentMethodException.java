package com.naturalwine.exception;

import com.naturalwine.entity.PaymentMethod;

public class UnSupportedPaymentMethodException extends RuntimeException {

    public UnSupportedPaymentMethodException(PaymentMethod paymentMethod) {
        super("Payment method is not yet supported: " + paymentMethod);
    }
}
