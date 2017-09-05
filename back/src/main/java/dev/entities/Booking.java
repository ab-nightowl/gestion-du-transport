package dev.entities;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Booking {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private LocalDateTime dateFirst;
	private LocalDateTime dateLast;
	@ManyToOne
	private Vehicle vehicle;
	@ManyToOne
	private User driver;

	private AdvertStatut statut;

	public AdvertStatut getStatut() {
		return statut;
	}

	public void setStatut(AdvertStatut statut) {
		this.statut = statut;
	}

	public LocalDateTime getDateFirst() {
		return dateFirst;
	}

	public void setDateFirst(LocalDateTime dateFirst) {
		this.dateFirst = dateFirst;
	}

	public LocalDateTime getDateLast() {
		return dateLast;
	}

	public void setDateLast(LocalDateTime dateLast) {
		this.dateLast = dateLast;
	}

	public Vehicle getVehicle() {
		return vehicle;
	}

	public void setVehicle(Vehicle vehicle) {
		this.vehicle = vehicle;
	}

	public User getDriver() {
		return driver;
	}

	public void setDriver(User driver) {
		this.driver = driver;
	}

	public Integer getId() {
		return id;
	}

}
