package com.example.microservices.competition_service.api.judge.repository;

import com.example.microservices.competition_service.api.judge.model.Judge;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JudgeRepository extends JpaRepository<Judge, Long> {
}
