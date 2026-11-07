package com.naturalwine.service.payment;

import com.naturalwine.entity.*;
import com.naturalwine.exception.OrderAlreadyPaidException;
import com.naturalwine.exception.UnSupportedPaymentMethodException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.function.Function;
import java.util.stream.Collectors;

@Slf4j
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

    public String generatePaymentUrl(final Order order) throws UnSupportedPaymentMethodException, OrderAlreadyPaidException {
        List<Transaction> transactionList = transactionService.getTransactionsForOrder(order.getId());

        // 1. Evaluate existing order transaction history
        if (!transactionList.isEmpty()) {
            // Block request if order is already paid
            final boolean isPaid = transactionList.stream()
                    .anyMatch(tx -> tx.getStatus() == TransactionStatus.SUCCESS);

            if (isPaid) {
                throw new OrderAlreadyPaidException(order.getId());
            }

            // Get the latest transaction attempt
            Transaction latestTx = transactionList.stream()
                    .max(Comparator.comparing(Transaction::getDoe))
                    .orElse(null);

            if (latestTx.getStatus() == TransactionStatus.PENDING) {
                //For existing transactions always use the one previously used in the transaction to check for status only
                PaymentGateway previousPaymentGateway = gatewayRegistry.get(latestTx.getPaymentMethod());
                TransactionStatus previousPaymentTransStatus = previousPaymentGateway.checkTransactionStatus(latestTx.getGatewayTransactionId());

                if(previousPaymentTransStatus == TransactionStatus.SUCCESS) {
                    latestTx.setStatus(TransactionStatus.SUCCESS);
                    transactionService.save(latestTx);

                    throw new OrderAlreadyPaidException(order.getId());
                }else if(previousPaymentTransStatus == TransactionStatus.PENDING) {
                   return latestTx.getRedirectUrl();
                }else if(previousPaymentTransStatus == TransactionStatus.EXPIRED) {
                    // Expire previous pending session if method changed, expired, or cart amount changed
                    latestTx.setStatus(TransactionStatus.EXPIRED);
                    transactionService.save(latestTx);
                }
                //TODO if a gateway fails a lookup, then we should throw the exception and not allow user to proceed for now.
                //TODO log the exception so someone can look at it.
            }
        }

        return getPaymentUrl(order);
    }

    public List<Transaction> getTransactionsForOrder(Long orderId) {
        List<Transaction> transactions = transactionService.getTransactionsForOrder(orderId);

        //return the list in desc
        if(transactions != null && !transactions.isEmpty()) {
            transactions.sort(Comparator.comparing(Transaction::getDoe).reversed());
        }

        return transactions;
    }

    private String getPaymentUrl(final Order order) {
        // 2. Fetch gateway strategy for requested payment method
        final PaymentMethod paymentMethod = order.getPaymentMethod();
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
