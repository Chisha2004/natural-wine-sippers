package com.naturalwine.exception;

import com.naturalwine.entity.TransactionStatus;

public class OrderAlreadyPaidException extends RuntimeException {
    TransactionStatus transactionStatus;

    public OrderAlreadyPaidException(Long orderId, TransactionStatus transactionStatus) {
        super("Order " + orderId + " is already paid.");
        this.transactionStatus = transactionStatus;
    }

    public OrderAlreadyPaidException(Long orderId) {
        this(orderId, TransactionStatus.SUCCESS);
    }
}
