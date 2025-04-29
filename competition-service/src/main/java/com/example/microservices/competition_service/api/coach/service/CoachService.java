package com.example.microservices.competition_service.api.coach.service;

import com.example.microservices.competition_service.api.athlete.dto.AthleteDto;
import com.example.microservices.competition_service.api.athlete.model.Athlete;
import com.example.microservices.competition_service.api.coach.dto.CoachDto;
import com.example.microservices.competition_service.api.coach.model.Coach;
import com.example.microservices.competition_service.api.coach.repository.CoachRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class CoachService {

    private final CoachRepository coachRepository;

    public void createCoach(CoachDto coachDto) {
        Coach coach = new Coach();
        coach.setClub(coachDto.club());
        coach.setName(coachDto.name());
        coach.setDuan(coachDto.duan());
        coach.setPhone(coachDto.phone());
        coach.setEmail(coachDto.email());
        coachRepository.save(coach);
    }

    public List<CoachDto> getAllCoaches() {
        return coachRepository.findAll()
                .stream()
                .map(coach -> new CoachDto(coach.getId(), coach.getName(), coach.getEmail(), coach.getPhone(), coach.getDuan(), coach.getClub()))
                .toList();
    }

    public CoachDto getCoachById(Long id) {
        Coach coach = coachRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Coach with ID " + id + " not found"));

        return new CoachDto(
                coach.getId(),
                coach.getName(),
                coach.getEmail(),
                coach.getPhone(),
                coach.getDuan(),
                coach.getClub()
        );
    }
}
