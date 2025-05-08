package com.example.microservices.competition_service.api.event.dto;

import com.example.microservices.competition_service.api.event.model.Event;

public record EventDto(Long id, String name, String ageGroup, Event.Gender gender) {
}
