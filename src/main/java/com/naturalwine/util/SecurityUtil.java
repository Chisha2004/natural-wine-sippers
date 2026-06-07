package com.naturalwine.util;

import org.springframework.security.core.context.SecurityContextHolder;
import com.naturalwine.exception.UserNotAuthenticatedException;

public class SecurityUtil {

    /**
     * Get the currently authenticated userId from Spring Security
     *
     * @return the userId as a Long
     * @throws UserNotAuthenticatedException if user is not authenticated
     */
    public static Long getCurrentUserId() throws UserNotAuthenticatedException {
        var authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated()) {
            throw new UserNotAuthenticatedException();
        }
        return Long.valueOf(authentication.getPrincipal().toString());
    }
}

