package com.example.microservices.competition_service.api.score.controller;

import com.example.microservices.competition_service.api.score.dto.ScoreDto;
import com.example.microservices.competition_service.api.score.service.ScoreService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/competition/score")
@RequiredArgsConstructor
public class ScoreController {

    private final ScoreService scoreService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public String createScore(@RequestBody ScoreDto scoreDto) {
        scoreService.createScore(scoreDto);
        return "Score Created Successfully";
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<ScoreDto> getAllScores() {
        return scoreService.getAllScores();
    }

}