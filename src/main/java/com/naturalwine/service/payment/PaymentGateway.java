package com.naturalwine.service.payment;

import com.naturalwine.entity.Order;
import com.naturalwine.entity.PaymentMethod;
import com.naturalwine.entity.Transaction;
import com.naturalwine.entity.TransactionStatus;

import java.math.BigDecimal;

public interface PaymentGateway {
    PaymentMethod getSupportedMethod();
    PaymentResponse generatePaymentUrl(BigDecimal amount, Order order);
    //Map the response accordingly and do not catch the exception if anything failed.
    //unless specified like e.g If a gateway says that a response like 400 means the transaction may not exist
    // then map that 400 to TransactionStatus.EXPIRED.
    TransactionStatus checkTransactionStatus(Transaction transaction);
}
