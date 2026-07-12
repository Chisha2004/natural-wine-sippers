package com.naturalwine.service;

import com.naturalwine.model.UserType;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.UUID;

@Service
public class JwtService {
    @Value("${jwt.secret:your-super-secret-key-that-is-at-least-256-bits-long-for-HS256-algorithm}")
    private String jwtSecret;

    @Value("${jwt.expiration:86400000}")
    private long jwtExpirationMs;

    public static final String CLAIM_USER_TYPE = "userType";

    /**
     * Generates a JWT token for a registered user with UUID
     *
     * @param uuid the UUID user ID
     * @return JWT token
     */
    public String generateToken(final UUID uuid, final UserType userType) {
        return generateTokenWithUserType(uuid.toString(), userType);
    }

    public String generateGuestToken(final UUID guestUUID) {
        return generateTokenWithUserType(guestUUID.toString(), UserType.GUEST);
    }

    /**
     * Internal method to generate token with custom userType
     *
     * @param subject the token subject (user ID or guest UUID)
     * @param userType the user type (Guest, Regular, Admin, etc.)
     * @return JWT token
     */
    private String generateTokenWithUserType(final String subject, final UserType userType) {
        JwtBuilder jwtBuilder = Jwts.builder()
                .subject(subject)
                .claim(CLAIM_USER_TYPE, userType)
                .issuedAt(new Date())
                .signWith(getSigningKey(), SignatureAlgorithm.HS256);

        if (userType != UserType.GUEST) {
            jwtBuilder.expiration(new Date(System.currentTimeMillis() + jwtExpirationMs));
        }

        return jwtBuilder.compact();
    }

    /**
     * Extracts the user ID (as UUID) from token
     * Works for both numeric user IDs and UUID guest IDs
     *
     * @param token JWT token
     * @return user UUID or guest UUID as UUID
     */
    public UUID extractUserUuidFromToken(final String token) {
        final String uuidStr = Jwts.parser()
                .verifyWith(getSigningKey())
                .build()
                .parseSignedClaims(token)
                .getPayload()
                .getSubject();
        return UUID.fromString(uuidStr);
    }

    /**
     * Extracts the user type claim from token
     *
     * @param token JWT token
     * @return userType (Guest, Regular, Admin, etc.)
     */
    public UserType extractUserTypeFromToken(String token) {
        Claims claims = Jwts.parser()
                .verifyWith(getSigningKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
        return UserType.valueOf(claims.get(CLAIM_USER_TYPE, String.class));
    }


    /**
     * Validates JWT token signature and expiration
     *
     * @param token JWT token
     * @return true if valid
     */
    public boolean validateToken(String token) {
        try {
            Jwts.parser()
                    .verifyWith(getSigningKey())
                    .build()
                    .parseSignedClaims(token);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    private SecretKey getSigningKey() {
        return Keys.hmacShaKeyFor(jwtSecret.getBytes());
    }
}

