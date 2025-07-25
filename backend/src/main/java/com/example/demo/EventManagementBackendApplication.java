package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication(scanBasePackages = {"controller","service","model","repository"})
@EnableMongoRepositories(basePackages = "repository")
@EntityScan(basePackages = "model")
public class EventManagementBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(EventManagementBackendApplication.class, args);
	}

}
