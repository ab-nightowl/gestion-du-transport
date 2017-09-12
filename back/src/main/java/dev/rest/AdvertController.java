package dev.rest;

import java.util.List;
import java.util.stream.Collectors;

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

	@RequestMapping(path = "/cancelled/{id}", method = RequestMethod.PATCH)
	public ResponseEntity<Advert> cancelledAdvert(@PathVariable("id") Integer id) {
		Advert advert = new Advert();
		advert = advertRepo.findOneById(id);
		advert.setStatut(AdvertStatut.CANCELED);
		advertRepo.save(advert);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Advert>> listAdvert() {
		List<Advert> adverts = advertService.findAll();
		return new ResponseEntity<List<Advert>>(adverts, HttpStatus.OK);
	}

	@RequestMapping(value = "/book/{user}", method = RequestMethod.PATCH)
	public void bookAdvert(@RequestBody Advert advert) {
		advertService.bookAdvert(advert);
	}

	@RequestMapping(value = "/{user}", method = RequestMethod.GET)
	public ResponseEntity<List<Advert>> getAllAdvert(@PathVariable("user") String registrationNumber) {
		User user = new User();
		user = userRepo.findByRegistrationNumber(registrationNumber);
		List<Advert> adverts = advertService.findAllByDriver(user);
		return new ResponseEntity<List<Advert>>(adverts, HttpStatus.OK);
	}

	@RequestMapping(value = "/passenger/{user}", method = RequestMethod.GET)
	public ResponseEntity<List<Advert>> getAllPassengerAdvert(@PathVariable("user") String registrationNumber) {
		User user = userRepo.findByRegistrationNumber(registrationNumber);
		List<Advert> adverts = advertService.findAllByPassengers(user);
		return new ResponseEntity<List<Advert>>(adverts, HttpStatus.OK);
	}

	@RequestMapping(path = "/passenger/cancelled/{id}", method = RequestMethod.PATCH)
	public ResponseEntity<Advert> cancelledAdvert(@PathVariable("id") Integer id,
			@RequestBody String registrationNumber) {
		Advert advert = advertService.findOneById(id);
		advert.setPassengers(advert.getPassengers().stream()
				.filter(p -> !p.getRegistrationNumber().equals(registrationNumber)).collect(Collectors.toList()));
		return new ResponseEntity<Advert>(HttpStatus.OK);
	}
}
