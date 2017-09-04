package dev.entities;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;

@Entity
public class User {
	@Id
	private String registrationNumber;
	@Enumerated(EnumType.STRING)
	private Role role;

	public String getRegistrationNumber() {
		return registrationNumber;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

}
