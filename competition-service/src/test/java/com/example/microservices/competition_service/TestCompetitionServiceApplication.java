package com.example.microservices.competition_service;

import org.springframework.boot.SpringApplication;

public class TestCompetitionServiceApplication {

	public static void main(String[] args) {
		SpringApplication.from(CompetitionServiceApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
