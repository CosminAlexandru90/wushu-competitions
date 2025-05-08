package com.example.microservices.competition_service.api.club.repository;

import com.example.microservices.competition_service.api.club.model.Club;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClubRepository extends JpaRepository<Club, Long> {
}
