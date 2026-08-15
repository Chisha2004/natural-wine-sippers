package com.naturalwine.service.payment;

import com.naturalwine.entity.Order;
import com.naturalwine.entity.PaymentMethod;

import java.math.BigDecimal;

public interface PaymentGateway {
    PaymentMethod getSupportedMethod();
    PaymentResponse generatePaymentUrl(BigDecimal amount, Order order);
}
