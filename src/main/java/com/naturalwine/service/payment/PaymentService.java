package com.naturalwine.service.payment;

import com.naturalwine.entity.Order;
import com.naturalwine.entity.PaymentMethod;
import com.naturalwine.entity.Transaction;
import com.naturalwine.exception.UnSupportedPaymentMethodException;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
public class PaymentService {

    private final Map<PaymentMethod, PaymentGateway> gatewayRegistry;
    private final TransactionService transactionService;

    public PaymentService(Set<PaymentGateway> gateways, TransactionService transactionService) {
        this.gatewayRegistry = gateways.stream()
                .collect(Collectors.toMap(
                        PaymentGateway::getSupportedMethod,
                        Function.identity()
                ));
        this.transactionService = transactionService;
    }

    public String generatePaymentUrl(final PaymentMethod paymentMethod, final BigDecimal amount, Order order) {

        final List<Transaction> transactionList = transactionService.getTransactionsForOrder(order.getId());

        //Step one check if there is already a successful


        final PaymentGateway gateway = gatewayRegistry.get(paymentMethod);

        if (gateway == null) {
            throw new UnSupportedPaymentMethodException(paymentMethod);
        }

        PaymentResponse response = gateway.generatePaymentUrl(amount, order);

        //TODO check if the transaction already in the db if not add it

        return gateway.generatePaymentUrl(amount, order);
    }
}
