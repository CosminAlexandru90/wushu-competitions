package com.example.microservices.competition_service.api.evaluation.model;

import com.example.microservices.competition_service.api.athlete.model.Athlete;
import com.example.microservices.competition_service.api.competition.model.Competition;
import com.example.microservices.competition_service.api.event.model.Event;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Entity
@Table(name = "evaluation")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Evaluation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "competition_id", nullable = false)
    private Competition competition;

    @ManyToOne
    @JoinColumn(name = "athlete_id", nullable = false)
    private Athlete athlete;

    @ManyToOne
    @JoinColumn(name = "event_id", nullable = false)
    private Event event;

    private BigDecimal deductions;
    private String notes;
}
