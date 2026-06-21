package com.naturalwine.util;

import com.naturalwine.entity.UserEntity;
import com.naturalwine.model.UserType;
import org.springframework.security.core.context.SecurityContextHolder;
import com.naturalwine.exception.UserNotAuthenticatedException;

import java.util.UUID;

public class SecurityUtil {

    public static UserEntity getCurrentUser() throws UserNotAuthenticatedException {
        var authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.getPrincipal() instanceof UserEntity) {
            return (UserEntity) authentication.getPrincipal();
        }
        throw new UserNotAuthenticatedException();
    }

    public static UserType getCurrentUserType() {
        var authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.getDetails() instanceof UserType) {
            return (UserType) authentication.getDetails();
        }
        return null;
    }

    public static UUID getCurrentUserUuid() {
        var authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.getPrincipal() instanceof UserEntity) {
            return ((UserEntity) authentication.getPrincipal()).getUuid();
        }
        throw new UserNotAuthenticatedException();
    }
    public static boolean isCurrentUserGuest() {
        return UserType.GUEST == getCurrentUserType();
    }
}


