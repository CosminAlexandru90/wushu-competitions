package com.example.microservices.competition_service.api.event.repository;

import com.example.microservices.competition_service.api.event.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Long> {
}
