package com.naturalwine.service.payment.mock;

import com.naturalwine.entity.Order;
import com.naturalwine.entity.PaymentMethod;
import com.naturalwine.exception.UnSupportedPaymentMethodException;
import com.naturalwine.service.payment.PaymentGateway;
import com.naturalwine.service.payment.PaymentResponse;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
@Profile("dev")
public class MockIdealPaymentGateway implements PaymentGateway {
    @Override
    public PaymentMethod getSupportedMethod() {
        return PaymentMethod.IDEAL;
    }

    @Override
    public PaymentResponse generatePaymentUrl(BigDecimal amount, Order order) {
        throw new UnSupportedPaymentMethodException(PaymentMethod.IDEAL); //TODO needs to be implemented
    }
}
