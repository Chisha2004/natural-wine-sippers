package com.naturalwine.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record AddToCartRequest(
    Long userId,
    Long beverageId,
    Integer quantity
) {
}

