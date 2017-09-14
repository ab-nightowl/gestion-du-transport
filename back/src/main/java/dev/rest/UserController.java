package dev.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import dev.entities.Role;
import dev.entities.User;
import dev.repository.UserRepository;
import dev.util.RandomEnum;

@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	private UserRepository userRepo;

	@GetMapping
	public List<User> listerUser() {
		return userRepo.findAll();
	}

	@RequestMapping(path = "/role", method = RequestMethod.PUT, consumes = { "application/json" })
	public void setRole(@RequestBody List<User> listUsers) {
		User user;
		for (User u : listUsers) {

			user = new User();
			user.setRegistrationNumber(u.getRegistrationNumber());
			user.setRole(RandomEnum.setRoleRandom());
			user.setEmail(u.getEmail());
			user.setNom(u.getNom());
			user.setPrenom(u.getPrenom());

			userRepo.save(user);
		}
	}

	@RequestMapping(path = "/role/{email}", method = RequestMethod.GET)
	public Role getRole(@PathVariable String email) {

		User user = userRepo.findByEmail(email + ".com");
		return user.getRole();

	}

}
