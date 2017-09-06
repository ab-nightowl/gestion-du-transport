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
	
	public void initDateVehicle(){
		Vehicle v1 = new Vehicle("Abc123", "Mercedes", "Model1", "categ1", "../statique/img/car1.png", 4, VehicleStatus.REPARATION);
		Vehicle v2 = new Vehicle("Abc456", "Audi", "Model1", "categ2", "../statique/img/car2.png", 2, VehicleStatus.OUTOFORDER);
		Vehicle v3 = new Vehicle("Abc789", "Toyota", "Model1", "categ3", "../statique/img/car3.jpg", 6, VehicleStatus.SERVICE);
		Vehicle v4 = new Vehicle("Abc999", "Mercedes", "Model1", "categ4", "../statique/img/car4.png", 1, VehicleStatus.OUTOFORDER);
		
		List<Vehicle> listV = new ArrayList<>();
		listV.add(v1);
		listV.add(v2);
		listV.add(v3);
		listV.add(v4);
		
		for (Vehicle vehicle : listV) {
			vehicleRepo.save(vehicle);
		}
		
	}
	
	@CrossOrigin(origins = "http://localhost:9000")
	@GetMapping
	public List<Vehicle> listVehicles() {
		initDateVehicle();
		return vehicleRepo.findAll();
	}

	
	
	
	@CrossOrigin(origins = "http://localhost:9000")
	@RequestMapping(
			value = "/{licensePlat}",
			method= RequestMethod.PUT,  
			consumes = {"application/json"})
	public void reserverVehicleSociety(@PathVariable String licensePlat, @RequestBody Booking bookingFromClient){
		
		
		Vehicle v = vehicleRepo.findOne(licensePlat);
		if(v != null){
			Booking booking = new Booking();
			booking.setDateFirst(LocalDateTime.of(bookingFromClient.getDateFirst().getYear(),
					bookingFromClient.getDateFirst().getMonth(),
					bookingFromClient.getDateFirst().getDayOfMonth(),
					bookingFromClient.getDateFirst().getHour(),
					bookingFromClient.getDateFirst().getMinute(),
					bookingFromClient.getDateFirst().getSecond()
					));
			
			booking.setDateLast(LocalDateTime.of(bookingFromClient.getDateLast().getYear(),
					bookingFromClient.getDateLast().getMonth(),
					bookingFromClient.getDateLast().getDayOfMonth(),
					bookingFromClient.getDateLast().getHour(),
					bookingFromClient.getDateLast().getMinute(),
					bookingFromClient.getDateLast().getSecond()
					));
			
			booking.setVehicle(v);
			
			bookingRepo.save(booking);
		}
		
	}
	

}
