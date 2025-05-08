package com.example.microservices.competition_service.api.coach.repository;

import com.example.microservices.competition_service.api.coach.model.Coach;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CoachRepository extends JpaRepository<Coach, Long> {
}
