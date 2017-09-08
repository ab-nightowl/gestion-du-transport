package dev.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import dev.entities.Advert;
import dev.entities.AdvertStatut;
import dev.entities.User;
import dev.repository.AdvertRepository;
import dev.repository.UserRepository;
import dev.services.AdvertService;

@RestController
@RequestMapping("/advert")
public class AdvertController {

	@Autowired
	private AdvertService advertService;

	@Autowired
	private AdvertRepository advertRepo;

	@Autowired
	private UserRepository userRepo;

	@RequestMapping(path = "/saveNewAdvert", method = RequestMethod.POST, consumes = "application/json;charset=UTF-8")
	public ResponseEntity<Advert> saveNewAdvert(@RequestBody Advert advert) {
		if (advert.getCapacity() > 20 || advert.getCapacity() < 1) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		advert.setPassengers(null);
		advert.setStatut(AdvertStatut.INPROGRESS);
		advertRepo.save(advert);
		return new ResponseEntity<Advert>(advert, HttpStatus.CREATED);

	}

	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Advert>> listAdvert() {
		List<Advert> adverts = advertService.findAll();
		return new ResponseEntity<List<Advert>>(adverts, HttpStatus.OK);
	}

	@RequestMapping(value = "/book", method = RequestMethod.PATCH, consumes = "application/json;charset=UTF-8")
	public void bookAdvert(@RequestBody Advert advert) {
		advert.setCapacity(advert.getCapacity() - 1);
		advertService.bookAdvert(advert);
	}

	@RequestMapping(value = "/{user}", method = RequestMethod.GET)
	public ResponseEntity<List<Advert>> getAllAdvert(@PathVariable("user") String registrationNumber) {
		User user = new User();
		user = userRepo.findByRegistrationNumber(registrationNumber);
		List<Advert> adverts = advertRepo.findAllByDriver(user);
		return new ResponseEntity<List<Advert>>(adverts, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/passenger/{user}", method = RequestMethod.GET)
	public ResponseEntity<List<Advert>> getAllPassengerAdvert(@PathVariable("user") String registrationNumber){
		User user = new User();
		user = userRepo.findByRegistrationNumber(registrationNumber);
		List<Advert> adverts = advertRepo.findAllByPassengers(user);
		return new ResponseEntity<List<Advert>>(adverts, HttpStatus.OK);
		
		
	}
}
