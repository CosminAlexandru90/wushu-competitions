package com.example.microservices.competition_service.api.score.repository;

import com.example.microservices.competition_service.api.score.model.Score;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoreRepository extends JpaRepository<Score, Long> {
}
