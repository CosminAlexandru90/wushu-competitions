package com.example.microservices.competition_service.api.competition.dto;

import java.time.LocalDate;

public record CompetitionDto(Long id, String name, LocalDate startDate, LocalDate endDate, String type) {
}
