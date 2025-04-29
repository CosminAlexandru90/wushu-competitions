package com.example.microservices.competition_service.api.score.dto;

import com.example.microservices.competition_service.api.evaluation.model.Evaluation;
import com.example.microservices.competition_service.api.judge.model.Judge;

import java.math.BigDecimal;

public record ScoreDto(Long id, Evaluation evaluation, Judge judge, BigDecimal score, boolean isHeadJudge) {
}
