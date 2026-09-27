package com.naturalwine.controller;

import com.naturalwine.dto.CheckoutRequest;
import com.naturalwine.dto.CheckoutResponseDto;
import com.naturalwine.dto.ShippingAddressDto;
import com.naturalwine.service.CheckoutService;
import com.naturalwine.util.SecurityUtil;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/v1/checkout")
public class CheckoutController {
    //TODO all data coming from frontend should be sanitized
    private final CheckoutService checkoutService;

    public CheckoutController(final CheckoutService checkoutService) {
        this.checkoutService = checkoutService;
    }

    @PostMapping("/initiate-checkout")
    public ResponseEntity<CheckoutResponseDto> initiateCheckout(@Valid @RequestBody CheckoutRequest request) {
        final UUID userUuid = SecurityUtil.getCurrentUserUuid();

        CheckoutResponseDto response = checkoutService.processCheckout(userUuid, request);

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping("/shipping-address")
    public ResponseEntity<ShippingAddressDto> getDefaultShippingAddress() {
        final UUID userUuid = SecurityUtil.getCurrentUserUuid();
        ShippingAddressDto shippingAddressDto = checkoutService.getDefaultShippingAddress(userUuid);
        if (shippingAddressDto != null) {
            return ResponseEntity.ok(shippingAddressDto);
        }

        return ResponseEntity.noContent().build();
    }

    //TODO each order should have and managed its own delivery address.
    // We have a default shipping address which can be set when you buy first time.
}
