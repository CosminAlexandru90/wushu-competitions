package com.example.microservices.competition_service.api.club.dto;

import java.time.LocalDate;
import java.util.List;

public record ClubDto(Long id, String name, String address, Long headCoachId, String headCoachName, LocalDate dateEstablished, List<Long> coachIds, List<String> coachNames) {
}

