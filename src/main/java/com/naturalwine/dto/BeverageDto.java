package com.naturalwine.dto;

import java.math.BigDecimal;

public record BeverageDto(
        Long id,
        String name,
        String type,          // e.g., "Wine", "Beer"
        String category,      // e.g., "Red", "IPA"
        String description,
        BigDecimal price,
        String imgUrl,

        // Origin Details
        String country,
        String region,
        String producer,

        // Wine Specifics
        String grapeVariety,
        String vintage,
        String degree,        // Alcohol %
        Integer capacity,     // e.g., 750 (ml)

        // Social/Date
        Integer rating,
        Integer year
) {}
