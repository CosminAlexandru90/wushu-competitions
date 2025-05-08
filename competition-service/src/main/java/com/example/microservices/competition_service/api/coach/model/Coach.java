package com.example.microservices.competition_service.api.coach.model;

import com.example.microservices.competition_service.api.club.model.Club;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "coach")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Coach {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String phone;
    private String duan;

    @OneToMany(mappedBy = "headCoach", fetch = FetchType.LAZY)
    private List<Club> headCoachedClubs = new ArrayList<>();

    @ManyToMany
    @JoinTable(
            name = "coach_club",
            joinColumns = @JoinColumn(name = "coach_id"),
            inverseJoinColumns = @JoinColumn(name = "club_id")
    )
    private List<Club> clubs = new ArrayList<>();
}
