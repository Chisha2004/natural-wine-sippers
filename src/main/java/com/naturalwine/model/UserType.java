package com.naturalwine.model;

public enum UserType {
    GUEST("GUEST"),
    BASIC("BASIC"),
    ADMIN("ADMIN");

    private final String value;

    UserType(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public static UserType fromString(String text) {
        for (UserType b : UserType.values()) {
            if (b.value.equalsIgnoreCase(text)) {
                return b;
            }
        }
        throw new IllegalArgumentException("Unexpected value '" + text + "' for UserType");
    }
}