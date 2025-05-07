package com.example.microservices.competition_service.api.club.dto;

import java.time.LocalDate;

public record ClubDto(Long id, String name, String address, Long headCoachId, String headCoachName, LocalDate dateEstablished) {
}

