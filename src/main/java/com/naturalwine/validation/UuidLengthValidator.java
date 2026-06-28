package com.naturalwine.validation;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class UuidLengthValidator implements ConstraintValidator<ValidUuidLength, String> {

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        // If it's null or empty, let @NotNull or other annotations handle it.
        // This keeps the parameter optional.
        if (value == null || value.trim().isEmpty()) {
            return true;
        }

        // Enforce the strict standard UUID character length
        return value.length() == 36;
    }
}