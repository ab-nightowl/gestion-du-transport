package dev.rest;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.entities.Role;
import dev.entities.User;
import dev.repository.UserRepository;

@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	private UserRepository userRepo;
	
	public void init(){
		List<User> listUsers = Arrays.asList(
				new User("user01", "LAM", "Tan", "lamtan93@gmail.com", "admin", Role.ADMINISTRATOR),
				new User("user02", "SIMPSON", "Jerome", "jerome@gmail.com", "jerome", Role.DRIVER),
				new User("user03", "KUNTZ", "Thomas", "thomas@gmail.com", "thomas", Role.COWORKER),
				new User("user04", "RODDET", "Rossi", "rossi@gmail.com", "admin", Role.ADMINISTRATOR)
				);
		listUsers.forEach(u -> userRepo.save(u));
		
	}
			

	@GetMapping
	public List<User> listerUser() {
		init();
		return userRepo.findAll();
	}
}
