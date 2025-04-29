package com.example.microservices.competition_service.api.event.service;

import com.example.microservices.competition_service.api.athlete.dto.AthleteDto;
import com.example.microservices.competition_service.api.athlete.model.Athlete;
import com.example.microservices.competition_service.api.event.dto.EventDto;
import com.example.microservices.competition_service.api.event.model.Event;
import com.example.microservices.competition_service.api.event.repository.EventRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class EventService {

    private final EventRepository eventRepository;

    public void createEvent(EventDto eventDto) {
        Event event = new Event();
        event.setName(eventDto.name());
        event.setAgeGroup(eventDto.ageGroup());
        event.setGender(eventDto.gender());
        eventRepository.save(event);
    }

    public List<EventDto> getAllEvents() {
        return eventRepository.findAll()
                .stream()
                .map(event -> new EventDto(event.getId(), event.getName(), event.getAgeGroup(), event.getGender()))
                .toList();
    }

    public EventDto getEventById(Long id) {
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Event with ID " + id + " not found"));

        return new EventDto(
                event.getId(),
                event.getName(),
                event.getAgeGroup(),
                event.getGender()
        );
    }
}
