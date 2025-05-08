package com.example.microservices.competition_service.api.coach.controller;

import com.example.microservices.competition_service.api.athlete.dto.AthleteDto;
import com.example.microservices.competition_service.api.coach.dto.CoachDto;
import com.example.microservices.competition_service.api.coach.dto.CoachWithClubsDto;
import com.example.microservices.competition_service.api.coach.service.CoachService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/competition/coach")
@RequiredArgsConstructor
public class CoachController {

    private final CoachService coachService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public String createCoach(@RequestBody CoachDto coachDto) {
        coachService.createCoach(coachDto);
        return "Coach Created Successfully";
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<CoachWithClubsDto> getAllCoaches() {
        return coachService.getAllCoaches();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public CoachWithClubsDto getCoachById(@PathVariable Long id) {
        return coachService.getCoachById(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteAthlete(@PathVariable Long id) {
        coachService.deleteCoachById(id);
    }

}