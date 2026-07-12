package com.naturalwine.util;

import com.naturalwine.entity.UserEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import com.naturalwine.exception.UserNotAuthenticatedException;

import java.util.UUID;

public class SecurityUtil {
    public static UUID getCurrentUserUuid() throws UserNotAuthenticatedException {
        var authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.getPrincipal() instanceof UserEntity) {
            return ((UserEntity) authentication.getPrincipal()).getUuid();
        }
        throw new UserNotAuthenticatedException();
    }
}


