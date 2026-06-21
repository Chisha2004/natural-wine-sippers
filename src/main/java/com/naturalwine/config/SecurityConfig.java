package com.naturalwine.config;

import com.naturalwine.service.JwtService;
import jakarta.servlet.DispatcherType;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    private final JwtService jwtService;

    public SecurityConfig(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(authz -> authz
                        // 1. Allow forwarded requests to index.html
                        .dispatcherTypeMatchers(DispatcherType.FORWARD).permitAll()

                        // 2. Allow static resources
                        .requestMatchers("/", "/index.html", "/static/**", "/*.js", "/*.css", "/*.ico").permitAll()

                        // 3. Allow public authentication endpoints (register, login, guest token)
                        .requestMatchers("/v1/auth/**").permitAll()

                        // 4. Allow cart endpoints - both guest and registered users can access
                        .requestMatchers("/v1/cart/**").permitAll()

                        // 5. Allow all other API endpoints (can be protected separately if needed)
                        .requestMatchers("/api/**").permitAll()
                        .requestMatchers("/v1/**").permitAll()

                        // 6. Everything else
                        .anyRequest().permitAll()
                );

        // Add JWT filter before UsernamePasswordAuthenticationFilter
        // This processes JWT tokens in Authorization header
        http.addFilterBefore(new JwtAuthenticationFilter(jwtService), UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}


