package dev;


import static org.assertj.core.api.Assertions.assertThat;

import java.util.Arrays;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import dev.entities.Vehicle;
import dev.entities.VehicleStatus;
import dev.repository.VehicleRepository;

@RunWith(SpringRunner.class)
@DataJpaTest
public class vehicleRepositoryTest {
	@Test
	public void contextLoads() {
	}
	
	@Autowired
	private VehicleRepository vehicleRepo;
	

	
	
	@org.junit.Before
	public void setup(){
		List<Vehicle> listV = Arrays.asList(
		new Vehicle("Abc123", "Mercedes", "Model1", "categ1", "../statique/img/car1.png", 4, VehicleStatus.REPARATION),
		new Vehicle("Abc456", "Audi", "Model1", "categ2", "../statique/img/car2.png", 2, VehicleStatus.OUTOFORDER),
		new Vehicle("Abc789", "Toyota", "Model1", "categ3", "../statique/img/car3.jpg", 6, VehicleStatus.SERVICE),
		new Vehicle("Abc999", "Mercedes", "Model1", "categ4", "../statique/img/car4.png", 1, VehicleStatus.OUTOFORDER)
		);
		
		listV.forEach(v -> vehicleRepo.save(v));	
		
	}
	
	
	
	@Test
	public void getAllVehicles_Test(){
		List<Vehicle> listVehicles = vehicleRepo.findAll();		
		assertThat(listVehicles.size()).isEqualTo(4);
	}
	
	
	
	
}
