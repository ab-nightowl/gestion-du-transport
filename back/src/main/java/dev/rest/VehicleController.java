package dev.rest;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import dev.entities.AdvertStatut;
import dev.entities.Booking;
import dev.entities.Vehicle;
import dev.entities.VehicleStatus;
import dev.repository.BookingRepository;
import dev.repository.UserRepository;
import dev.repository.VehicleRepository;

@RestController
@RequestMapping("/collab/booking/vehicle")
public class VehicleController {

	@Autowired
	private VehicleRepository vehicleRepo;

	@Autowired
	UserRepository userRepo;

	@Autowired
	BookingRepository bookingRepo;

	public void initDateVehicle() {
		Vehicle v1 = new Vehicle("Abc123", "Mercedes", "2013", "categ1", "./statique/img/car5.jpg", 4,
				VehicleStatus.REPARATION);
		Vehicle v2 = new Vehicle("Abc456", "Audi", "2016", "categ2", "./statique/img/car6.jpg", 2,
				VehicleStatus.OUTOFORDER);
		Vehicle v3 = new Vehicle("Abc789", "Toyota", "2010", "categ3", "./statique/img/car7.jpg", 6,
				VehicleStatus.SERVICE);
		Vehicle v4 = new Vehicle("Abc999", "Mercedes", "2017", "categ4", "./statique/img/car8.jpg", 1,
				VehicleStatus.OUTOFORDER);
		Vehicle v5 = new Vehicle("Abc159", "Toyota", "2016", "categ2", "./statique/img/car6.jpg", 3,
				VehicleStatus.SERVICE);
		Vehicle v6 = new Vehicle("Abc147", "Audi", "2012", "categ5", "./statique/img/car7.jpg", 4,
				VehicleStatus.OUTOFORDER);
		Vehicle v7 = new Vehicle("Abc756", "Mercedes", "2005", "categ4", "./statique/img/car8.jpg", 4,
				VehicleStatus.REPARATION);
		Vehicle v8 = new Vehicle("Abc147", "Mercedes", "2007", "categ4", "./statique/img/car5.jpg", 2,
				VehicleStatus.REPARATION);

		List<Vehicle> listV = new ArrayList<>();
		listV.add(v1);
		listV.add(v2);
		listV.add(v3);
		listV.add(v4);
		
		listV.add(v5);
		listV.add(v6);
		listV.add(v7);
		listV.add(v8);

		for (Vehicle vehicle : listV) {
			vehicleRepo.save(vehicle);
		}

	}

	@GetMapping
	public List<Vehicle> listVehicles() {
		initDateVehicle();
		return vehicleRepo.findAll();
	}

	@RequestMapping(value = "/{licensePlat}", method = RequestMethod.PUT, consumes = { "application/json" })
	public void reserverVehicleSociety(@PathVariable String licensePlat, @RequestBody Booking bookingFromClient) {

		Vehicle v = vehicleRepo.findOne(licensePlat);
		if (v != null) {
			Booking booking = new Booking();
			booking.setDateFirst(LocalDateTime.of(bookingFromClient.getDateFirst().getYear(),
					bookingFromClient.getDateFirst().getMonth(), bookingFromClient.getDateFirst().getDayOfMonth(),
					bookingFromClient.getDateFirst().getHour(), bookingFromClient.getDateFirst().getMinute(),
					bookingFromClient.getDateFirst().getSecond()));

			booking.setDateLast(LocalDateTime.of(bookingFromClient.getDateLast().getYear(),
					bookingFromClient.getDateLast().getMonth(), bookingFromClient.getDateLast().getDayOfMonth(),
					bookingFromClient.getDateLast().getHour(), bookingFromClient.getDateLast().getMinute(),
					bookingFromClient.getDateLast().getSecond()));

			// booking.setDriver(bookingFromClient.getDriver());
			booking.setBooker(bookingFromClient.getBooker());
			booking.setWithDriver(bookingFromClient.isWithDriver());
			booking.setStatut(AdvertStatut.INPROGRESS);
			booking.setVehicle(v);

			bookingRepo.save(booking);
		}

	}

	@CrossOrigin(origins = "*")
	@RequestMapping(method = RequestMethod.GET, path = "/check/{licensePlat}")
	public boolean checkDispoVehicleSociety(@PathVariable String licensePlat) {
		boolean busyVehicle = false;
		List<Booking> listBooking = bookingRepo.findAll();
		for (Booking b : listBooking) {
			if (b.getVehicle().getLicensePlate().equalsIgnoreCase(licensePlat)) {
				busyVehicle = true;
			}
		}

		return busyVehicle;
	}

}