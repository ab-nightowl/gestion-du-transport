package dev.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.entities.User;

public interface UserRepository extends JpaRepository<User, String> {

	User findByRegistrationNumber(String registrationNumber);

}
