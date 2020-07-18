package com.example.userserver;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.example.userserver.model.User;
import com.example.userserver.repository.UserRepository;

@Configuration
public class LoadDatabase {

	Logger log = LoggerFactory.getLogger(LoadDatabase.class);

	@Bean
	public CommandLineRunner initDatabase(UserRepository repository) {

		return args -> {
			log.info("Preloading " + repository.save(new User("Shubham", "Vyavahare","shubham@gmail.com", "Pune")));
		};
	}
}
