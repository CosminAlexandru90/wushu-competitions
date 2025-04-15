package com.example.microservices.gateway.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.ReactiveOAuth2AuthorizedClientService;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class UserController {

    private final ReactiveOAuth2AuthorizedClientService authorizedClientService;

    public UserController(ReactiveOAuth2AuthorizedClientService authorizedClientService) {
        this.authorizedClientService = authorizedClientService;
    }

    @GetMapping("/userinfo")
    public ResponseEntity<Map<String, Object>> getUserInfo(@AuthenticationPrincipal Jwt jwt) {
        Map<String, Object> claims = jwt.getClaims();
        return ResponseEntity.ok(claims);
    }


    @GetMapping("/token")
    public Mono<Map<String, Object>> getAccessToken(Authentication authentication) {
        if (authentication instanceof OAuth2AuthenticationToken oauthToken) {
            return authorizedClientService
                    .loadAuthorizedClient(
                            oauthToken.getAuthorizedClientRegistrationId(),
                            oauthToken.getName())
                    .map(OAuth2AuthorizedClient::getAccessToken)
                    .map(token -> Map.of(
                            "access_token", token.getTokenValue(),
                            "expires_at", token.getExpiresAt(),
                            "scopes", token.getScopes()
                    ));
        } else {
            return Mono.just(Map.of("error", "No OAuth2 authentication found"));
        }
    }
}
