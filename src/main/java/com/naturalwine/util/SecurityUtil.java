package com.naturalwine.util;

import org.springframework.security.core.context.SecurityContextHolder;
import com.naturalwine.exception.UserNotAuthenticatedException;

import java.util.UUID;

public class SecurityUtil {
    public static UUID getCurrentUserUuid() throws UserNotAuthenticatedException {
        var authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null) {
            throw new UserNotAuthenticatedException();
        }

        return ((UUID) authentication.getPrincipal());
    }
}


