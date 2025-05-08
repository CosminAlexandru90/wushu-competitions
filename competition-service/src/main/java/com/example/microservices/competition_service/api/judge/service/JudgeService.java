package com.example.microservices.competition_service.api.judge.service;

import com.example.microservices.competition_service.api.athlete.dto.AthleteDto;
import com.example.microservices.competition_service.api.athlete.model.Athlete;
import com.example.microservices.competition_service.api.athlete.repository.AthleteRepository;
import com.example.microservices.competition_service.api.judge.dto.JudgeDto;
import com.example.microservices.competition_service.api.judge.model.Judge;
import com.example.microservices.competition_service.api.judge.repository.JudgeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class JudgeService {

    private final JudgeRepository judgeRepository;

    public void createJudge(JudgeDto judgeDto) {
        Judge judge = new Judge();
        judge.setClub(judgeDto.club());
        judge.setName(judgeDto.name());
        judge.setPhone(judgeDto.phone());
        judge.setEmail(judgeDto.email());
        judgeRepository.save(judge);
    }

    public List<JudgeDto> getAllJudges() {
        return judgeRepository.findAll()
                .stream()
                .map(judge -> new JudgeDto(judge.getId(), judge.getName(), judge.getEmail(), judge.getPhone(), judge.getClub()))
                .toList();
    }

    public JudgeDto getJudgeById(Long id) {
        Judge judge = judgeRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Judge with ID " + id + " not found"));

        return new JudgeDto(
                judge.getId(),
                judge.getName(),
                judge.getEmail(),
                judge.getPhone(),
                judge.getClub()
        );
    }
}
