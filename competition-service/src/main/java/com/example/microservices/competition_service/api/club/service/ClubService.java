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
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

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

        // Head coach
        if (clubDto.headCoachId() != null) {
            Coach headCoach = coachRepository.findById(clubDto.headCoachId())
                    .orElseThrow(() -> new NoSuchElementException("Coach with ID " + clubDto.headCoachId() + " not found"));
            club.setHeadCoach(headCoach);
        }

        // Regular coaches
        if (clubDto.coachIds() != null && !clubDto.coachIds().isEmpty()) {
            List<Coach> coaches = coachRepository.findAllById(clubDto.coachIds());
            club.setCoaches(coaches);

            // Also update the inverse side
            for (Coach coach : coaches) {
                coach.getClubs().add(club);
            }
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

    @Transactional
    public void deleteClubById(Long id) {
        Club club = clubRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Club with ID " + id + " not found"));

        for (Coach coach : new ArrayList<>(club.getCoaches())) {
            coach.getClubs().remove(club);
        }
        club.getCoaches().clear();

        club.setHeadCoach(null);

        clubRepository.delete(club);
    }

    private ClubDto mapToDto(Club club) {
        List<Long> coachIds = club.getCoaches().stream()
                .map(Coach::getId)
                .collect(Collectors.toList());

        List<String> coachNames = club.getCoaches().stream()
                .map(Coach::getName)
                .collect(Collectors.toList());

        return new ClubDto(
                club.getId(),
                club.getName(),
                club.getAddress(),
                club.getHeadCoach() != null ? club.getHeadCoach().getId() : null,
                club.getHeadCoach() != null ? club.getHeadCoach().getName() : null,
                club.getDateEstablished(),
                coachIds,
                coachNames
        );
    }
}
