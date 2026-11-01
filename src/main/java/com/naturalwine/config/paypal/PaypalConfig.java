package com.naturalwine.config.paypal;

import com.paypal.sdk.Environment;
import com.paypal.sdk.PaypalServerSdkClient;
import com.paypal.sdk.authentication.ClientCredentialsAuthModel;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class PaypalConfig {
    private final String clientId = "AQe68GpKNCI5DxNun4k3w5lb_Z6M1IVeQaBtBhfWyAItch-ACdr0FszwQK_b5fPoaI0eywtVIaFgloTe";
    private final String clientSecret = "EB2M4eiPjqMUrSFfABE1tNmsO4xXrjd3jTfkbh4bzYtkIHyak09EZZh4Ybm-NyXsf8-XU9BvXMzz_wIu";
    private final String environment;

    public PaypalConfig(@Value("${paypal.client-id}") String clientId,
                        @Value("${paypal.client-secret}") String clientSecret,
                        @Value("${paypal.environment:sandbox}") String environment) {
//        this.clientId = clientId;
//        this.clientSecret = clientSecret;
        //TODO the property is not being read. hard code for now
        this.environment = environment;
    }

    @Bean
    public PaypalServerSdkClient paypalServerSdkClient() {
        Environment env = "prod".equalsIgnoreCase(environment)
                ? Environment.PRODUCTION
                : Environment.SANDBOX;

        return new PaypalServerSdkClient.Builder()
                .environment(env)
                .clientCredentialsAuth(
                        new ClientCredentialsAuthModel.Builder(clientId, clientSecret).build()
                )
                .build();
    }
}