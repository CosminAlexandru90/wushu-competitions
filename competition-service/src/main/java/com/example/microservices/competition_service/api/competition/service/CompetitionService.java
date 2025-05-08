package com.example.microservices.competition_service.api.competition.service;

import com.example.microservices.competition_service.api.athlete.dto.AthleteDto;
import com.example.microservices.competition_service.api.athlete.model.Athlete;
import com.example.microservices.competition_service.api.competition.dto.CompetitionDto;
import com.example.microservices.competition_service.api.competition.model.Competition;
import com.example.microservices.competition_service.api.competition.repository.CompetitionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class CompetitionService {

    private final CompetitionRepository competitionRepository;

    public void createCompetition(CompetitionDto competitionDto) {
        Competition competition = new Competition();
        competition.setName(competitionDto.name());
        competition.setStartDate(competitionDto.startDate());
        competition.setEndDate(competitionDto.endDate());
        competition.setType(competitionDto.type());
        competitionRepository.save(competition);
    }

    public List<CompetitionDto> getAllCompetitions() {
        return competitionRepository.findAll()
                .stream()
                .map(competition -> new CompetitionDto(competition.getId(), competition.getName(), competition.getStartDate(), competition.getEndDate(), competition.getType()))
                .toList();
    }

    public CompetitionDto getCompetitionById(Long id) {
        Competition competition = competitionRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Competition with ID " + id + " not found"));

        return new CompetitionDto(
                competition.getId(),
                competition.getName(),
                competition.getStartDate(),
                competition.getEndDate(),
                competition.getType()
        );
    }
}
