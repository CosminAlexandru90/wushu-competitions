package com.example.microservices.competition_service.api.score.service;

import com.example.microservices.competition_service.api.athlete.model.Athlete;
import com.example.microservices.competition_service.api.athlete.repository.AthleteRepository;
import com.example.microservices.competition_service.api.score.dto.ScoreDto;
import com.example.microservices.competition_service.api.score.model.Score;
import com.example.microservices.competition_service.api.score.repository.ScoreRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ScoreService {

    private final ScoreRepository scoreRepository;

    public void createScore(ScoreDto scoreDto) {
        Score score = new Score();
        score.setScore(scoreDto.score());
        score.setEvaluation(scoreDto.evaluation());
        score.setJudge(scoreDto.judge());
        score.setHeadJudge(scoreDto.isHeadJudge());
        scoreRepository.save(score);
    }

    public List<ScoreDto> getAllScores() {
        return scoreRepository.findAll()
                .stream()
                .map(score -> new ScoreDto(score.getId(), score.getEvaluation(), score.getJudge(), score.getScore(), score.isHeadJudge()))
                .toList();
    }
}
