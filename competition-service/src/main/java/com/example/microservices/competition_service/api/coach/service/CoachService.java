package com.example.microservices.competition_service.api.coach.service;

import com.example.microservices.competition_service.api.club.dto.ClubDto;
import com.example.microservices.competition_service.api.coach.dto.CoachDto;
import com.example.microservices.competition_service.api.coach.dto.CoachWithClubsDto;
import com.example.microservices.competition_service.api.coach.model.Coach;
import com.example.microservices.competition_service.api.coach.repository.CoachRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CoachService {

    private final CoachRepository coachRepository;

    public void createCoach(CoachDto coachDto) {
        Coach coach = new Coach();
        coach.setName(coachDto.name());
        coach.setDuan(coachDto.duan());
        coach.setPhone(coachDto.phone());
        coach.setEmail(coachDto.email());
        coachRepository.save(coach);
    }

    public List<CoachWithClubsDto> getAllCoaches() {
        return coachRepository.findAll()
                .stream()
                .map(this::mapToDetailedDto)
                .toList();
    }

    public CoachWithClubsDto getCoachById(Long id) {
        Coach coach = coachRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Coach with ID " + id + " not found"));

        return mapToDetailedDto(coach);
    }

    public void deleteCoachById(Long id) {
        if (!coachRepository.existsById(id)) {
            throw new NoSuchElementException("Coach with ID " + id + " not found");
        }
        coachRepository.deleteById(id);
    }

    private CoachWithClubsDto mapToDetailedDto(Coach coach) {
        List<ClubDto> headClubs = coach.getHeadCoachedClubs().stream()
                .map(club -> new ClubDto(
                        club.getId(),
                        club.getName(),
                        club.getAddress(),
                        club.getHeadCoach() != null ? club.getHeadCoach().getId() : null,
                        club.getHeadCoach() != null ? club.getHeadCoach().getName() : null,
                        club.getDateEstablished(),
                        club.getCoaches().stream()
                                .filter(coach1 -> !coach1.equals(club.getHeadCoach()))
                                .map(Coach::getId)
                                .collect(Collectors.toList()),
                        club.getCoaches().stream()
                                .filter(coach1 -> !coach1.equals(club.getHeadCoach()))
                                .map(Coach::getName)
                                .collect(Collectors.toList())
                ))
                .collect(Collectors.toList());

        List<ClubDto> memberClubs = coach.getClubs().stream()
                .map(club -> new ClubDto(
                        club.getId(),
                        club.getName(),
                        club.getAddress(),
                        club.getHeadCoach() != null ? club.getHeadCoach().getId() : null,
                        club.getHeadCoach() != null ? club.getHeadCoach().getName() : null,
                        club.getDateEstablished(),
                        club.getCoaches().stream()
                                .filter(coach1 -> !coach1.equals(club.getHeadCoach()))
                                .map(Coach::getId)
                                .collect(Collectors.toList()),
                        club.getCoaches().stream()
                                .filter(coach1 -> !coach1.equals(club.getHeadCoach()))
                                .map(Coach::getName)
                                .collect(Collectors.toList())
                ))
                .collect(Collectors.toList());

        return new CoachWithClubsDto(
                coach.getId(),
                coach.getName(),
                coach.getEmail(),
                coach.getPhone(),
                coach.getDuan(),
                headClubs,
                memberClubs
        );
    }
}
