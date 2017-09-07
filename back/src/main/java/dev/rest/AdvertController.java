package dev.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import dev.entities.Advert;
import dev.entities.AdvertStatut;
import dev.repository.AdvertRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/advert")
public class AdvertController {

	@Autowired
	private AdvertRepository advertRepo;

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
}
