package dev.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.entities.Advert;
import dev.repository.AdvertsRepository;

@Service
public class AdvertService {

	
	@Autowired
	private AdvertsRepository advertRepo;

	public List<Advert> findAll() {
		return advertRepo.findAll();
	}

	public void bookAdvert(Advert advert) {
		advert.setCapacity((advert.getCapacity() - 1));
		advertRepo.save(advert);
	}

}
