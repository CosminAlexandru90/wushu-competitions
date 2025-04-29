package com.example.microservices.competition_service.api.judge.controller;

import com.example.microservices.competition_service.api.athlete.dto.AthleteDto;
import com.example.microservices.competition_service.api.judge.dto.JudgeDto;
import com.example.microservices.competition_service.api.judge.service.JudgeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/competition/judge")
@RequiredArgsConstructor
public class JudgeController {

    private final JudgeService judgeService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public String createJudge(@RequestBody JudgeDto judgeDto) {
        judgeService.createJudge(judgeDto);
        return "Judge Created Successfully";
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<JudgeDto> getAllJudges() {
        return judgeService.getAllJudges();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public JudgeDto getJudgeById(@PathVariable Long id) {
        return judgeService.getJudgeById(id);
    }

}