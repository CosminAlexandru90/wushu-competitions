package com.example.microservices.competition_service.api.evaluation.service;

import com.example.microservices.competition_service.api.athlete.dto.AthleteDto;
import com.example.microservices.competition_service.api.athlete.model.Athlete;
import com.example.microservices.competition_service.api.evaluation.dto.EvaluationDto;
import com.example.microservices.competition_service.api.evaluation.model.Evaluation;
import com.example.microservices.competition_service.api.evaluation.repository.EvaluationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class EvaluationService {

    private final EvaluationRepository evaluationRepository;

    public void createEvaluation(EvaluationDto evaluationDto) {
        Evaluation evaluation = new Evaluation();
        evaluation.setAthlete(evaluationDto.athlete());
        evaluation.setCompetition(evaluationDto.competition());
        evaluation.setEvent(evaluationDto.event());
        evaluation.setDeductions(evaluationDto.deductions());
        evaluation.setNotes(evaluationDto.notes());
        evaluationRepository.save(evaluation);
    }

    public List<EvaluationDto> getAllEvaluations() {
        return evaluationRepository.findAll()
                .stream()
                .map(evaluation -> new EvaluationDto(evaluation.getId(), evaluation.getCompetition(), evaluation.getAthlete(), evaluation.getEvent(), evaluation.getDeductions(), evaluation.getNotes()))
                .toList();
    }

    public EvaluationDto getEvaluationById(Long id) {
        Evaluation evaluation = evaluationRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Evaluation with ID " + id + " not found"));

        return new EvaluationDto(
                evaluation.getId(),
                evaluation.getCompetition(),
                evaluation.getAthlete(),
                evaluation.getEvent(),
                evaluation.getDeductions(),
                evaluation.getNotes()
        );
    }
}
