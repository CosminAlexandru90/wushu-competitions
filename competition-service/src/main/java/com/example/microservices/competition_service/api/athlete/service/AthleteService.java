package com.example.microservices.competition_service.api.athlete.service;

import com.example.microservices.competition_service.api.athlete.dto.AthleteDto;
import com.example.microservices.competition_service.api.athlete.model.Athlete;
import com.example.microservices.competition_service.api.athlete.repository.AthleteRepository;
import com.example.microservices.competition_service.api.club.model.Club;
import com.example.microservices.competition_service.api.club.repository.ClubRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class AthleteService {

    private final AthleteRepository athleteRepository;
    private final ClubRepository clubRepository;

    public void createAthlete(AthleteDto athleteDto) {
        Athlete athlete = new Athlete();
        athlete.setName(athleteDto.name());
        athlete.setEmail(athleteDto.email());
        athlete.setPhone(athleteDto.phone());
        athlete.setDuan(athleteDto.duan());
        athlete.setDateOfBirth(athleteDto.dateOfBirth());

        if (athleteDto.clubId() != null) {
            Club club = clubRepository.findById(athleteDto.clubId())
                    .orElseThrow(() -> new NoSuchElementException("Club with ID " + athleteDto.clubId() + " not found"));
            athlete.setClub(club);
        }

        athleteRepository.save(athlete);
    }

    public List<AthleteDto> getAllAthletes() {
        return athleteRepository.findAll()
                .stream()
                .map(this::mapToDto)
                .toList();
    }

    public AthleteDto getAthleteById(Long id) {
        Athlete athlete = athleteRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Athlete with ID " + id + " not found"));
        return mapToDto(athlete);
    }

    public void deleteAthleteById(Long id) {
        if (!athleteRepository.existsById(id)) {
            throw new NoSuchElementException("Athlete with ID " + id + " not found");
        }
        athleteRepository.deleteById(id);
    }

    private AthleteDto mapToDto(Athlete athlete) {
        return new AthleteDto(
                athlete.getId(),
                athlete.getName(),
                athlete.getEmail(),
                athlete.getPhone(),
                athlete.getClub() != null ? athlete.getClub().getId() : null,
                athlete.getClub() != null ? athlete.getClub().getName() : null,
                athlete.getDuan(),
                athlete.getDateOfBirth()
        );
    }
}
