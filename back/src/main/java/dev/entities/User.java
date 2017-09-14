package dev.entities;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class User {
	
	@Id
	private String registrationNumber;

	private String nom;
	private String prenom;
	private String email;
	private String password;
	
	@OneToMany(mappedBy = "passenger")
	@JsonManagedReference("passengers")
	private List<UserAdvert> adverts = new ArrayList<>(new HashSet<UserAdvert>());

	@Enumerated(EnumType.STRING)
	private Role role;

	public String getRegistrationNumber() {
		return registrationNumber;
	}

	public Role getRole() {
		return role;
	}

	public String getNom() {
		return nom;
	}

	public User(String registrationNumber, String nom, String prenom, String email, String password,
			List<UserAdvert> adverts, Role role) {
		super();
		this.registrationNumber = registrationNumber;
		this.nom = nom;
		this.prenom = prenom;
		this.email = email;
		this.password = password;
		this.adverts = adverts;
		this.role = role;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setRegistrationNumber(String registrationNumber) {
		this.registrationNumber = registrationNumber;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public User() {

	}

	public User(String registrationNumber, String nom, String prenom, String email, String password, Role role) {
		super();
		this.registrationNumber = registrationNumber;
		this.nom = nom;
		this.prenom = prenom;
		this.email = email;
		this.password = password;
		this.role = role;
	}

	public List<UserAdvert> getAdverts() {
		return adverts;
	}

	public void setAdverts(List<UserAdvert> adverts) {
		this.adverts = adverts;
	}

}
