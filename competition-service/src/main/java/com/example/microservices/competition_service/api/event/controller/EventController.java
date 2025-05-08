package com.example.microservices.competition_service.api.event.controller;

import com.example.microservices.competition_service.api.athlete.dto.AthleteDto;
import com.example.microservices.competition_service.api.event.dto.EventDto;
import com.example.microservices.competition_service.api.event.service.EventService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/competition/event")
@RequiredArgsConstructor
public class EventController {

    private final EventService eventService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public String createEvent(@RequestBody EventDto eventDto) {
        eventService.createEvent(eventDto);
        return "Event Created Successfully";
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<EventDto> getAllEvents() {
        return eventService.getAllEvents();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public EventDto getEventById(@PathVariable Long id) {
        return eventService.getEventById(id);
    }

}