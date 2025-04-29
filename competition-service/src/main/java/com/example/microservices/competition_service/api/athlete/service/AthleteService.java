package com.example.microservices.competition_service.api.athlete.service;

import com.example.microservices.competition_service.api.athlete.dto.AthleteDto;
import com.example.microservices.competition_service.api.athlete.model.Athlete;
import com.example.microservices.competition_service.api.athlete.repository.AthleteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class AthleteService {

    private final AthleteRepository athleteRepository;

    public void createAthlete(AthleteDto athleteDto) {
        Athlete athlete = new Athlete();
        athlete.setClub(athleteDto.club());
        athlete.setName(athleteDto.name());
        athlete.setDuan(athleteDto.duan());
        athlete.setPhone(athleteDto.phone());
        athlete.setEmail(athleteDto.email());
        athleteRepository.save(athlete);
    }

    public List<AthleteDto> getAllAthletes() {
        return athleteRepository.findAll()
                .stream()
                .map(athlete -> new AthleteDto(athlete.getId(), athlete.getName(), athlete.getEmail(), athlete.getPhone(), athlete.getDuan(), athlete.getClub()))
                .toList();
    }

    public AthleteDto getAthleteById(Long id) {
        Athlete athlete = athleteRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Athlete with ID " + id + " not found"));

        return new AthleteDto(
                athlete.getId(),
                athlete.getName(),
                athlete.getEmail(),
                athlete.getPhone(),
                athlete.getDuan(),
                athlete.getClub()
        );
    }
}
