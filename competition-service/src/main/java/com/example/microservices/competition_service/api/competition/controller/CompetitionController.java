package com.example.microservices.competition_service.api.competition.controller;

import com.example.microservices.competition_service.api.athlete.dto.AthleteDto;
import com.example.microservices.competition_service.api.competition.dto.CompetitionDto;
import com.example.microservices.competition_service.api.competition.service.CompetitionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/competition/competition")
@RequiredArgsConstructor
public class CompetitionController {

    private final CompetitionService competitionService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public String createCompetition(@RequestBody CompetitionDto competitionDto) {
        competitionService.createCompetition(competitionDto);
        return "Competition Created Successfully";
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<CompetitionDto> getAllCompetitions() {
        return competitionService.getAllCompetitions();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public CompetitionDto getCompetitionById(@PathVariable Long id) {
        return competitionService.getCompetitionById(id);
    }

}