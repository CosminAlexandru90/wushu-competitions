package com.example.microservices.competition_service.api.athlete.repository;

import com.example.microservices.competition_service.api.athlete.model.Athlete;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AthleteRepository extends JpaRepository<Athlete, Long> {
}
