package com.naturalwine.service.payment.mock;

import com.naturalwine.entity.Order;
import com.naturalwine.entity.PaymentMethod;
import com.naturalwine.service.payment.PaymentGateway;
import com.naturalwine.service.payment.PaymentResponse;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

@Service
@Profile({"dev", "local"})
public class MockPaypalPaymentGateway implements PaymentGateway {
    // In-memory store: Order ID -> Active Transaction Session
    private final Map<Long, DummyTransaction> activeTransactions = new ConcurrentHashMap<>();

    public record DummyTransaction(
            String transactionId,
            BigDecimal amount,
            String paymentUrl,
            Instant expiresAt,
            String status // PENDING, COMPLETED, EXPIRED
    ) {}

    @Override
    public PaymentMethod getSupportedMethod() {
        return PaymentMethod.PAYPAL;
    }

    @Override
    public PaymentResponse generatePaymentUrl(final BigDecimal amount, final Order order) {
        Long orderId = order.getId();
        DummyTransaction existing = activeTransactions.get(orderId);

        // 1. Reuse existing session if still PENDING and NOT EXPIRED
        if (existing != null
                && "PENDING".equals(existing.status())
                && Instant.now().isBefore(existing.expiresAt())) {
            return new PaymentResponse(existing.transactionId, existing.paymentUrl);
        }

        // 2. Otherwise, create a new transaction ID and session (expires in 30 mins)
        final String newTransactionId = "MOCK-PP-" + UUID.randomUUID().toString().substring(0, 8);
        final String paymentUrl = "https://www.paypal.com/nl/home";

        final DummyTransaction newTransaction = new DummyTransaction(
                newTransactionId,
                amount,
                paymentUrl,
                Instant.now().plus(30, ChronoUnit.MINUTES),
                "PENDING"
        );

        activeTransactions.put(orderId, newTransaction);
        return new PaymentResponse(newTransaction.transactionId, paymentUrl);
    }

    public Optional<DummyTransaction> getTransaction(Long orderId) {
        return Optional.ofNullable(activeTransactions.get(orderId));
    }
}
