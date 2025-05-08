package com.example.microservices.competition_service.api.coach.dto;

import com.example.microservices.competition_service.api.club.dto.ClubDto;
import java.util.List;

public record CoachWithClubsDto( Long id, String name, String email, String phone, String duan, List<ClubDto> headClubs, List<ClubDto> memberClubs) {}
