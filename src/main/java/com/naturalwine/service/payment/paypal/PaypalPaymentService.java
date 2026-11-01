package com.naturalwine.service.payment.paypal;

import com.naturalwine.entity.Order;
import com.naturalwine.entity.PaymentMethod;
import com.naturalwine.service.payment.PaymentGateway;
import com.naturalwine.service.payment.PaymentResponse;
import com.paypal.sdk.PaypalServerSdkClient;
import com.paypal.sdk.controllers.OrdersController;
import com.paypal.sdk.http.response.ApiResponse;
import com.paypal.sdk.models.*;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Arrays;

@Log4j2
@Service
public class PaypalPaymentService implements PaymentGateway {
    private final OrdersController ordersController;

    public PaypalPaymentService(PaypalServerSdkClient paypalClient) {
        this.ordersController = paypalClient.getOrdersController();
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

            paymentResponse = PaymentResponse.builder()
                    .redirectUrl(redirectUrl)
                    .transactionId(paypalOrder.getId()) //TODO there is a referenceId in the purch
                    .build();

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
}
