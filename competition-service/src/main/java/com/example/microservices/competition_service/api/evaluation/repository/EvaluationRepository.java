package com.example.microservices.competition_service.api.evaluation.repository;

import com.example.microservices.competition_service.api.evaluation.model.Evaluation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EvaluationRepository extends JpaRepository<Evaluation, Long> {
}
