package dev.entities;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class UserAdvert {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@ManyToOne
	@JoinColumn(name = "advert_id")
	@JsonBackReference("advert")
	private Advert advert;

	@ManyToOne
	@JoinColumn(name = "user_registration_number")
	@JsonBackReference("passengers")
	private User passenger;

	@Enumerated(EnumType.STRING)
	private UserAdvertStatus status;

	public UserAdvert() {

	}

	public UserAdvert(Advert advert, User passenger, UserAdvertStatus status) {
		super();
		this.advert = advert;
		this.passenger = passenger;
		this.status = status;
	}

	public Advert getAdvert() {
		return advert;
	}

	public void setAdvert(Advert advert) {
		this.advert = advert;
	}

	public User getPassenger() {
		return passenger;
	}

	public void setPassenger(User passenger) {
		this.passenger = passenger;
	}

	public UserAdvertStatus getStatus() {
		return status;
	}

	public void setStatus(UserAdvertStatus status) {
		this.status = status;
	}

	public Integer getId() {
		return id;
	}

}
