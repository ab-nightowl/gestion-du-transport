package dev.entities;

import java.time.ZonedDateTime;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

@Entity
public class Advert {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private ZonedDateTime dateFirst;

	@ManyToOne
	private User driver;

	@ManyToMany
	@JoinTable(name = "User_Advert", joinColumns = @JoinColumn(name = "AdvertId", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "User_Registration_Number", referencedColumnName = "registrationNumber"))
	private List<User> passengers;
	private String addressDeparture;
	private String addressArrival;
	private String licensePlate;
	private String brand;
	private String model;
	private Integer capacity;
	@Enumerated(EnumType.STRING)
	private AdvertStatut statut;

	public Advert() {
	}

	public Advert(ZonedDateTime dateFirst, User driver, List<User> passengers, String addressDeparture,
			String addressArrival, String licensePlate, String brand, String model, Integer capacity,
			AdvertStatut statut) {
		super();
		this.dateFirst = dateFirst;
		this.driver = driver;
		this.passengers = passengers;
		this.addressDeparture = addressDeparture;
		this.addressArrival = addressArrival;
		this.licensePlate = licensePlate;
		this.brand = brand;
		this.model = model;
		this.capacity = capacity;
		this.statut = statut;
	}

	public AdvertStatut getStatut() {
		return statut;
	}

	public Integer getId() {
		return id;
	}

	public void setStatut(AdvertStatut statut) {
		this.statut = statut;
	}

	public ZonedDateTime getDateFirst() {
		return dateFirst;
	}

	public void setDateFirst(ZonedDateTime dateFirst) {
		this.dateFirst = dateFirst;
	}

	public User getDriver() {
		return driver;
	}

	public void setDriver(User driver) {
		this.driver = driver;
	}

	public List<User> getPassengers() {
		return passengers;
	}

	public void setPassengers(List<User> passengers) {
		this.passengers = passengers;
	}

	public String getAddressDeparture() {
		return addressDeparture;
	}

	public void setAddressDeparture(String addressDeparture) {
		this.addressDeparture = addressDeparture;
	}

	public String getAddressArrival() {
		return addressArrival;
	}

	public void setAddressArrival(String addressArrival) {
		this.addressArrival = addressArrival;
	}

	public String getLicensePlate() {
		return licensePlate;
	}

	public void setLicensePlate(String licensePlate) {
		this.licensePlate = licensePlate;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public Integer getCapacity() {
		return capacity;
	}

	public void setCapacity(Integer capacity) {
		this.capacity = capacity;
	}

}
