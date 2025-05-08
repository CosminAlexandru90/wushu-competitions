package com.example.microservices.competition_service.api.competition.repository;

import com.example.microservices.competition_service.api.competition.model.Competition;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompetitionRepository  extends JpaRepository<Competition, Long> {
}
