package com.example.microservices.competition_service.api.athlete.dto;

import java.math.BigDecimal;

public record AthleteDto(Long id, String name, String email, String phone, String club, String duan) {
}
