package com.naturalwine.controller;

import com.naturalwine.dto.CheckoutRequestDto;
import com.naturalwine.dto.CheckoutResponseDto;
import com.naturalwine.service.CheckoutService;
import com.naturalwine.util.SecurityUtil;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/checkout")
public class CheckoutController {
    private CheckoutService checkoutService;

    public CheckoutController(final CheckoutService checkoutService) {
        this.checkoutService = checkoutService;
    }

    @PostMapping
    public ResponseEntity<CheckoutResponseDto> initiateCheckout(@Valid @RequestBody CheckoutRequestDto request) {
        final UUID userUuid = SecurityUtil.getCurrentUserUuid();

        CheckoutResponseDto response = checkoutService.processCheckout(userUuid, request);

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}
