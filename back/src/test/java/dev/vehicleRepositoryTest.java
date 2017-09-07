package dev;


import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

import org.apache.tomcat.util.http.fileupload.util.Streams;
import org.aspectj.lang.annotation.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MockMvcBuilder;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import dev.entities.Vehicle;
import dev.entities.VehicleStatus;
import dev.repository.VehicleRepository;
import dev.rest.VehicleController;

@RunWith(SpringRunner.class)
@DataJpaTest
public class vehicleRepositoryTest {
	@Test
	public void contextLoads() {
	}
	
	@Autowired
	private VehicleRepository vehicleRepo;
	
	
//	@Autowired
//	private MockMvc mockMvc;
	
//	@MockBean
//    private VehicleController vehicleController;
	
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
	
	
//	@Test
//	public void getAllVehicles() throws Exception throws Exception {
//        given(this.vehicleController.listVehicles())
//        .willReturn(new VehicleDetails("Honda", "Civic"));
//        this.mvc.perform(get("/sboot/vehicle").accept(MediaType.TEXT_PLAIN))
//        .andExpect(status().isOk()).andExpect(content().string("Honda Civic"));
//}
	
}
