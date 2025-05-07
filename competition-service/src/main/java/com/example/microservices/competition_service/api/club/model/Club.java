package com.example.microservices.competition_service.api.club.model;

import com.example.microservices.competition_service.api.coach.model.Coach;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "club")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Club {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String address;

    private LocalDate dateEstablished;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "head_coach_id")
    private Coach headCoach;
}

