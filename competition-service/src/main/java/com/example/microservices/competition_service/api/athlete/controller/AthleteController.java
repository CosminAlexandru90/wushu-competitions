package com.example.microservices.competition_service.api.athlete.controller;

import com.example.microservices.competition_service.api.athlete.dto.AthleteDto;
import com.example.microservices.competition_service.api.athlete.service.AthleteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/competition/athlete")
@RequiredArgsConstructor
public class AthleteController {

    private final AthleteService athleteService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public String createAthlete(@RequestBody AthleteDto athleteDto) {
        athleteService.createAthlete(athleteDto);
        return "Athlete Created Successfully";
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<AthleteDto> getAllAthletes() {
        return athleteService.getAllAthletes();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public AthleteDto getAthleteById(@PathVariable Long id) {
        return athleteService.getAthleteById(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteAthlete(@PathVariable Long id) {
        athleteService.deleteAthleteById(id);
    }

}