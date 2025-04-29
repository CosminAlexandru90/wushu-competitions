package com.example.microservices.competition_service.api.evaluation.controller;

import com.example.microservices.competition_service.api.athlete.dto.AthleteDto;
import com.example.microservices.competition_service.api.evaluation.dto.EvaluationDto;
import com.example.microservices.competition_service.api.evaluation.service.EvaluationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/competition/evaluation")
@RequiredArgsConstructor
public class EvaluationController {

    private final EvaluationService evaluationService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public String createEvaluation(@RequestBody EvaluationDto evaluationDto) {
        evaluationService.createEvaluation(evaluationDto);
        return "Evaluation Created Successfully";
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<EvaluationDto> getAllEvaluations() {
        return evaluationService.getAllEvaluations();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public EvaluationDto getEvaluationById(@PathVariable Long id) {
        return evaluationService.getEvaluationById(id);
    }

}