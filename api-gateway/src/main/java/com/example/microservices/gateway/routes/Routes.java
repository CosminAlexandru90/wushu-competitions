package com.example.microservices.gateway.routes;


import org.springframework.context.annotation.Configuration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;


@Configuration
public class Routes {

    @RequestMapping("/fallback/product")
    public ResponseEntity<String> productFallback() {
        return ResponseEntity.ok("Product Service is temporarily unavailable. Please try again later.");
    }
}
