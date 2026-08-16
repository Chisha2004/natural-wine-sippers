package com.naturalwine.service.payment;

import com.naturalwine.entity.Order;
import com.naturalwine.entity.PaymentMethod;
import com.naturalwine.entity.Transaction;
import com.naturalwine.entity.TransactionStatus;
import com.naturalwine.exception.OrderAlreadyPaidException;
import com.naturalwine.exception.UnSupportedPaymentMethodException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.function.Function;
import java.util.stream.Collectors;

@Slf4j
@Service
public class PaymentService {
    private static final int TRANSACTION_EXPIRE_TIME = 30; //in mins
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

    public String generatePaymentUrl(final PaymentMethod paymentMethod, final Order order) {
        List<Transaction> transactionList = transactionService.getTransactionsForOrder(order.getId());

        // 1. Evaluate existing order transaction history
        if (!transactionList.isEmpty()) {
            // Block request if order is already paid
            boolean isPaid = transactionList.stream()
                    .anyMatch(tx -> tx.getStatus() == TransactionStatus.SUCCESS);
            if (isPaid) {
                throw new OrderAlreadyPaidException(order.getId());
            }

            // Get the latest transaction attempt
            Transaction latestTx = transactionList.stream()
                    .max(Comparator.comparing(Transaction::getUpdatedAt))
                    .orElse(null);

            if (latestTx.getStatus() == TransactionStatus.PENDING) {
                boolean isSameMethod = latestTx.getPaymentMethod() == paymentMethod;
                //TODO maybe this expire time is less like 15 but we keep it 30mins for now
                boolean isStillValid = latestTx.getCreatedAt().isAfter(LocalDateTime.now().minusMinutes(TRANSACTION_EXPIRE_TIME));
                boolean isSameAmount = latestTx.getTotalAmount().compareTo(order.getTotalAmount()) == 0;

                if (isSameMethod && isStillValid && isSameAmount) {
                    // Reuse existing active session without calling the external gateway
                    log.info("Reusing active payment session for orderId: {}, transactionId: {}",
                            order.getId(), latestTx.getGatewayTransactionId());
                    return latestTx.getRedirectUrl();
                }

                if (!isSameAmount) {
                    log.info("Order {} amount changed from {} to {}. Expiring previous transaction {}",
                            order.getId(), latestTx.getTotalAmount(), order.getTotalAmount(), latestTx.getGatewayTransactionId());
                } else if (!isSameMethod) {
                    log.info("Payment method changed from {} to {} for order {}. Expiring previous transaction {}",
                            latestTx.getPaymentMethod(), paymentMethod, order.getId(), latestTx.getGatewayTransactionId());
                } else {
                    log.info("Payment session expired for order {}. Expiring transaction {}",
                            order.getId(), latestTx.getGatewayTransactionId());
                }

                // Expire previous pending session if method changed, expired, or cart amount changed
                latestTx.setStatus(TransactionStatus.EXPIRED);
                transactionService.save(latestTx);
            }
        }

        // 2. Fetch gateway strategy for requested payment method
        PaymentGateway gateway = gatewayRegistry.get(paymentMethod);
        if (gateway == null) {
            throw new UnSupportedPaymentMethodException(paymentMethod);
        }

        // 3. Call gateway to generate new session
        PaymentResponse response = gateway.generatePaymentUrl(order.getTotalAmount(), order);

        // 4. Persist new PENDING transaction to database
        Transaction newTx = new Transaction();
        newTx.setOrderId(order.getId());
        newTx.setPaymentMethod(paymentMethod);
        newTx.setGatewayTransactionId(response.transactionId());
        newTx.setRedirectUrl(response.redirectUrl());
        newTx.setTotalAmount(order.getTotalAmount());
        newTx.setStatus(TransactionStatus.PENDING);

        transactionService.save(newTx);
        //TODO this maybe we remove in the future if we log too much
        log.info("Created new {} transaction {} for orderId: {} with amount: {}",
                paymentMethod, response.transactionId(), order.getId(), order.getTotalAmount());

        return response.redirectUrl();
    }
}
