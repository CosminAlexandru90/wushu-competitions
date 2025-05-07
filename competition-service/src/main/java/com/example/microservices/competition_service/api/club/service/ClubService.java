package com.example.microservices.competition_service.api.club.service;

import com.example.microservices.competition_service.api.athlete.model.Athlete;
import com.example.microservices.competition_service.api.athlete.repository.AthleteRepository;
import com.example.microservices.competition_service.api.club.dto.ClubDto;
import com.example.microservices.competition_service.api.club.model.Club;
import com.example.microservices.competition_service.api.club.repository.ClubRepository;
import com.example.microservices.competition_service.api.coach.model.Coach;
import com.example.microservices.competition_service.api.coach.repository.CoachRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class ClubService {

    private final ClubRepository clubRepository;
    private final CoachRepository coachRepository;

    public void createClub(ClubDto clubDto) {
        Club club = new Club();
        club.setName(clubDto.name());
        club.setAddress(clubDto.address());
        club.setDateEstablished(clubDto.dateEstablished());

        if (clubDto.headCoachId() != null) {
            Coach coach = coachRepository.findById(clubDto.headCoachId())
                    .orElseThrow(() -> new NoSuchElementException("Coach with ID " + clubDto.headCoachId() + " not found"));
            club.setHeadCoach(coach);
        }

        clubRepository.save(club);
    }

    public List<ClubDto> getAllClubs() {
        return clubRepository.findAll()
                .stream()
                .map(this::mapToDto)
                .toList();
    }

    public ClubDto getClubById(Long id) {
        Club club = clubRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Club with ID " + id + " not found"));
        return mapToDto(club);
    }

    public void deleteClubById(Long id) {
        if (!clubRepository.existsById(id)) {
            throw new NoSuchElementException("Club with ID " + id + " not found");
        }
        clubRepository.deleteById(id);
    }

    private ClubDto mapToDto(Club club) {
        return new ClubDto(
                club.getId(),
                club.getName(),
                club.getAddress(),
                club.getHeadCoach() != null ? club.getHeadCoach().getId() : null,
                club.getHeadCoach() != null ? club.getHeadCoach().getName() : null,
                club.getDateEstablished()
        );
    }
}
