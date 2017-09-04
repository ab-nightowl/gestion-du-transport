package dev.entities;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Entity;
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
	private LocalDateTime dateFirst;

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

	public LocalDateTime getDateFirst() {
		return dateFirst;
	}

	public void setDateFirst(LocalDateTime dateFirst) {
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
