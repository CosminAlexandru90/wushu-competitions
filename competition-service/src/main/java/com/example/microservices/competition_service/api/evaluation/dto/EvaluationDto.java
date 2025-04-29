package com.example.microservices.competition_service.api.evaluation.dto;

import com.example.microservices.competition_service.api.athlete.model.Athlete;
import com.example.microservices.competition_service.api.competition.model.Competition;
import com.example.microservices.competition_service.api.event.model.Event;

import java.math.BigDecimal;

public record EvaluationDto(Long id, Competition competition, Athlete athlete, Event event, BigDecimal deductions, String notes) {
}
