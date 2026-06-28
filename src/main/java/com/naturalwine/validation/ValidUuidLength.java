package com.naturalwine.validation;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;
import java.lang.annotation.*;

@Target({ElementType.FIELD, ElementType.PARAMETER})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = UuidLengthValidator.class)
@Documented
public @interface ValidUuidLength {
    String message() default "UUID must be exactly 36 characters long";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}