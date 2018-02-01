package com.learning.angular;

import com.learning.angular.domain.User;
import com.learning.angular.repository.UserRepository;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@Log
@EntityScan("com.learning.angular.domain")
@EnableJpaRepositories("com.learning.angular.repository")
@SpringBootApplication
public class AngularApplication {

	public static void main(String[] args) {
		SpringApplication.run(AngularApplication.class, args);
	}


	@Bean
	CommandLineRunner addUsers(UserRepository userRepository){
		return args -> {
			userRepository.saveAll(
					Arrays.asList(
							User.builder().name("user1").email("user1@email.com").build(),
							User.builder().name("user2").email("user2@email.com").build(),
							User.builder().name("user3").email("user3@email.com").build(),
							User.builder().name("user4").email("user4@email.com").build(),
							User.builder().name("user5").email("user5@email.com").build()
					));
		};
	}

	@RestController
	@RequestMapping("/server/user")
	public class UserController{

		@Autowired UserRepository userRepository;

		@GetMapping
		public List<User> getUsers(){
			return this.userRepository.findAll();
		}

		@GetMapping("/search")
		public User getUser(@RequestParam("name") String name){
			return  this.userRepository.findByName(name);
		}

		@PostMapping("/add")
		public User saveUser(@RequestBody User user){
			log.warning(user::toString);
			return this.userRepository.save(user);
		}
	}
}
