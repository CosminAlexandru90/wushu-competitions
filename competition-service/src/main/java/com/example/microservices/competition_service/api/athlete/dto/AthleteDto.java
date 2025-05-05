package com.example.microservices.competition_service.api.athlete.dto;

import java.time.LocalDate;

public record AthleteDto(Long id, String name, String email, String phone, Long clubId, String clubName, String duan, LocalDate dateOfBirth) {
}

