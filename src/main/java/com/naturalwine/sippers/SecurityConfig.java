package com.naturalwine.sippers;

import jakarta.servlet.DispatcherType;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(authz -> authz
                        // 1. CRITICAL: Allow forwarded requests to index.html
                        .dispatcherTypeMatchers(DispatcherType.FORWARD).permitAll()

                        // 2. Allow static resources explicitly
                        .requestMatchers("/", "/index.html", "/static/**", "/*.js", "/*.css", "/*.ico").permitAll()

                        // 3. Allow your API
                        .requestMatchers("/api/**").permitAll()

                        // 4. The rest
                        .anyRequest().permitAll()
                );

        return http.build();
    }
}
