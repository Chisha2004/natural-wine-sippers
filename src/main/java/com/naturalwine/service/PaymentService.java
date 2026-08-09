package com.naturalwine.service;

import com.naturalwine.entity.Order;
import com.naturalwine.entity.PaymentMethod;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
public class PaymentService {
    public String generatePaymentUrl(final PaymentMethod paymentMethod, final BigDecimal amount, Order order) {
        // Implementation for generating payment URL
        return "http://example.com/payment";
    }
}
