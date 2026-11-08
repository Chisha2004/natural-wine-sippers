package com.naturalwine.service.payment.paypal;

import com.naturalwine.entity.Order;
import com.naturalwine.entity.PaymentMethod;
import com.naturalwine.entity.Transaction;
import com.naturalwine.entity.TransactionStatus;
import com.naturalwine.service.payment.PaymentGateway;
import com.naturalwine.service.payment.PaymentResponse;
import com.paypal.sdk.PaypalServerSdkClient;
import com.paypal.sdk.controllers.OrdersController;
import com.paypal.sdk.http.response.ApiResponse;
import com.paypal.sdk.models.*;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import tools.jackson.databind.ObjectMapper;

import java.math.BigDecimal;
import java.util.Arrays;

@Log4j2
@Service
public class PaypalPaymentService implements PaymentGateway {
    private final OrdersController ordersController;
    private final ObjectMapper objectMapper;

    public PaypalPaymentService(final PaypalServerSdkClient paypalClient, final ObjectMapper objectMapper) {
        this.ordersController = paypalClient.getOrdersController();
        this.objectMapper = objectMapper;
    }

    @Override
    public PaymentMethod getSupportedMethod() {
        return PaymentMethod.PAYPAL;
    }

    @Override
    public PaymentResponse generatePaymentUrl(BigDecimal amount, Order order) {
        PurchaseUnitRequest purchaseUnit =
                new PurchaseUnitRequest.Builder(
                        new AmountWithBreakdown.Builder("EUR", String.valueOf(amount)).build()
                ).referenceId(order.getOrderNumber())
                        .build();

        CreateOrderInput input = new CreateOrderInput.Builder(
                null,
                new OrderRequest.Builder(
                        CheckoutPaymentIntent.CAPTURE,
                        Arrays.asList(
                                purchaseUnit
                        )
                ).build()
        ).prefer("return=representation")
                .build();

        String redirectUrl;
        PaymentResponse paymentResponse;

        try {
            ApiResponse<com.paypal.sdk.models.Order> response = ordersController.createOrder(input);
            com.paypal.sdk.models.Order paypalOrder = response.getResult();

            redirectUrl = paypalOrder.getLinks()
                    .stream()
                    .filter(link -> "approve".equals(link.getRel()))
                    .map(LinkDescription::getHref)
                    .findFirst()
                    .orElseThrow(() -> new RuntimeException(
                            "PayPal approval URL not found"
                    ));
            final String rawResponse = objectMapper.writeValueAsString(paypalOrder);
            paymentResponse = PaymentResponse.builder()
                    .redirectUrl(redirectUrl)
                    .transactionId(paypalOrder.getId())
                    .rawResponse(rawResponse)
                    .build();

            //TODO Paypal has an POST url which when a payment is successful we need to do a request to that url to
            // finalize the payment. Payment wont be finalized without this

        } catch (Exception e) {
            log.error(
                    "Exception occurred while calling PayPal for orderId: %s"
                            .formatted(order.getOrderNumber()),
                    e
            );

            throw new RuntimeException(e);
        }

        return paymentResponse;
    }

    @Override
    public TransactionStatus checkTransactionStatus(Transaction transaction) {
        try {
            GetOrderInput getOrderInput = new GetOrderInput.Builder(transaction.getGatewayTransactionId())
                    .build();
            ApiResponse<com.paypal.sdk.models.Order> response = ordersController.getOrder(getOrderInput);
            com.paypal.sdk.models.Order paypalOrder = response.getResult();
            com.paypal.sdk.models.OrderStatus status = paypalOrder.getStatus();

            if(status == com.paypal.sdk.models.OrderStatus.COMPLETED) {
                return handleCompletePaypalOrder(paypalOrder);
            }else if(status == com.paypal.sdk.models.OrderStatus.APPROVED ) {
                //TODO when order is approved you need to call capture api to get the money.
                // This call can and should also be automatically via a callback from paypal.
                //TODO Paypal needs a callback or webhook to trigger update to existing order and transaction status. We need to implement the api then from there call capture
               return captureApprovedOrder(paypalOrder.getId());
            }

            return switch (status){
                case  OrderStatus.CREATED,
                      OrderStatus.PAYER_ACTION_REQUIRED,
                      OrderStatus.SAVED -> TransactionStatus.PENDING;
                case  OrderStatus.VOIDED -> TransactionStatus.CANCELED;
                default -> TransactionStatus.PENDING_PAYMENT_CONFIRMATION;
            };

        } catch (Exception e) {
            log.error("Failed to verify order status with PayPal", e);
            throw new RuntimeException(e);
        }
    }

    public TransactionStatus captureApprovedOrder(String paypalOrderId) {
        CaptureOrderInput captureInput = new CaptureOrderInput.Builder()
                .id(paypalOrderId)
                .prefer("return=representation") // Forces PayPal to return the full capture resource representation
                .build();
        try {
            ApiResponse<com.paypal.sdk.models.Order> response = ordersController.captureOrder(captureInput);
            com.paypal.sdk.models.Order paypalOrder = response.getResult();

            return mapTransactionStatusFromPaypalOrderStatus(paypalOrder.getStatus());
        }catch (Exception e) {
            log.error("Failed to capture paypal orderId: %s".formatted(captureInput.getId()));
            throw new RuntimeException(e);
        }

    }

    //NOTE:For Order status COMPLETE, The intent of the order was completed and a `payments` resource
    // was created. Important: Check the payment status in `purchase_units[].payments.captures[].status`
    // before fulfilling the order. A completed order can indicate a payment was authorized,
    // an authorized payment was captured, or a payment was declined.
    public TransactionStatus handleCompletePaypalOrder(com.paypal.sdk.models.Order paypalOrder) {
        boolean hasComplete = paypalOrder.getPurchaseUnits().stream()
                .filter(pu -> pu.getPayments() != null && pu.getPayments().getCaptures() != null)
                .flatMap(pu -> pu.getPayments().getCaptures().stream())
                .anyMatch(capture -> {
                    final String status = capture.getStatus() != null ? capture.getStatus().toString() : "";
                    return "COMPLETED".equalsIgnoreCase(status);
                });
        return hasComplete? TransactionStatus.SUCCESS : TransactionStatus.PENDING_PAYMENT_CONFIRMATION;
    }

    private TransactionStatus mapTransactionStatusFromPaypalOrderStatus(OrderStatus status) {
        return switch (status){
            case  OrderStatus.CREATED,
                  OrderStatus.PAYER_ACTION_REQUIRED,
                  OrderStatus.SAVED -> TransactionStatus.PENDING;
            case  OrderStatus.VOIDED -> TransactionStatus.CANCELED;
            default -> TransactionStatus.PENDING_PAYMENT_CONFIRMATION;
        };
    }
}
