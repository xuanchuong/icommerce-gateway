package com.icommerce.gateway.client;

import com.icommerce.gateway.security.oauth2.AuthorizationHeaderUtil;
import org.springframework.context.annotation.Bean;

import feign.RequestInterceptor;

public class OAuth2InterceptedFeignConfiguration {

    @Bean(name = "oauth2RequestInterceptor")
    public RequestInterceptor getOAuth2RequestInterceptor(AuthorizationHeaderUtil authorizationHeaderUtil) {
        return new TokenRelayRequestInterceptor(authorizationHeaderUtil);
    }
}
