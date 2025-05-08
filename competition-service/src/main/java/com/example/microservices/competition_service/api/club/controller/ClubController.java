package com.example.microservices.competition_service.api.club.controller;

import com.example.microservices.competition_service.api.club.dto.ClubDto;
import com.example.microservices.competition_service.api.club.service.ClubService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/competition/club")
@RequiredArgsConstructor
public class ClubController {

    private final ClubService clubService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public String createClub(@RequestBody ClubDto clubDto) {
        clubService.createClub(clubDto);
        return "Club Created Successfully";
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<ClubDto> getAllClubs() {
        return clubService.getAllClubs();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ClubDto getClubById(@PathVariable Long id) {
        return clubService.getClubById(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteClub(@PathVariable Long id) {
        clubService.deleteClubById(id);
    }

}