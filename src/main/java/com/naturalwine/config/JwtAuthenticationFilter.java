package com.naturalwine.config;

import com.naturalwine.model.UserType;
import com.naturalwine.service.JwtService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;
import java.io.IOException;
import java.util.Collections;
import java.util.UUID;

public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtService jwtService;

    public JwtAuthenticationFilter(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {

        String authHeader = request.getHeader("Authorization");

        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String token = authHeader.substring(7);

            if (jwtService.validateToken(token)) {
                // Extract user ID/UUID (works for both registered users and guests)

                UUID userUuid = jwtService.extractUserIdFromToken(token);

                // Extract user type to distinguish between guest and registered users
                UserType userType = jwtService.extractUserTypeFromToken(token);

                // Create authentication token with user ID and user type as detail
                UsernamePasswordAuthenticationToken authentication =
                        new UsernamePasswordAuthenticationToken(userUuid, null, Collections.emptyList());

                // Store userType in details for later retrieval if needed
                authentication.setDetails(userType);

                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        }

        filterChain.doFilter(request, response);
    }
}