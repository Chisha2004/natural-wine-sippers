package com.naturalwine.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.UUID;

@JsonIgnoreProperties(ignoreUnknown = true)
public record AddToCartRequest(
    UUID userUuid,
    Long beverageId,
    Integer quantity
) {
}

