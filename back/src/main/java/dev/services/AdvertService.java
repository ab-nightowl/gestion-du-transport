package dev.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.entities.Advert;
import dev.entities.User;
import dev.repository.AdvertRepository;

@Service
public class AdvertService {

	@Autowired
	private AdvertRepository advertRepo;

	public List<Advert> findAll() {
		return advertRepo.findAll();
	}

	public void bookAdvert(Advert advert) {
		advert.setCapacity((advert.getCapacity() - 1));
		advertRepo.save(advert);
	}

	public List<Advert> findAllByPassengers(User user) {
		return advertRepo.findAllByPassengers(user);
	}

	public List<Advert> findAllByDriver(User user) {
		return advertRepo.findAllByDriver(user);
	}

	public Advert findOneById(Integer id) {
		return advertRepo.findOneById(id);
	}

}
