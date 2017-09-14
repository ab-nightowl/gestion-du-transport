package dev.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.entities.Advert;
import dev.entities.User;
import dev.entities.UserAdvert;
import dev.entities.UserAdvertStatus;
import dev.repository.AdvertRepository;
import dev.repository.UserAdvertRepository;
import dev.repository.UserRepository;

@Service
public class AdvertService {

	@Autowired
	private AdvertRepository advertRepo;
	@Autowired
	private UserAdvertRepository userAdvertRepo;
	@Autowired
	private UserRepository userRepo;

	public List<Advert> findAll() {
		return advertRepo.findAll();
	}

	public void bookAdvert(Advert advert, String registrationNumber) {
		User passenger = userRepo.findOneByRegistrationNumber(registrationNumber);
		UserAdvert userAdvertFound = userAdvertRepo.findByPassengerAndAdvert(passenger, advert);
		if (userAdvertFound != null) {
			userAdvertFound.setStatus(UserAdvertStatus.BOOKED);
			userAdvertRepo.save(userAdvertFound);
		} else {
			advert.setPassengerCount((advert.getPassengerCount() + 1));
			UserAdvert userAdvert = new UserAdvert();
			userAdvert.setAdvert(advert);
			userAdvert.setPassenger(passenger);
			userAdvert.setStatus(UserAdvertStatus.BOOKED);
			userAdvertRepo.save(userAdvert);
			advertRepo.save(advert);
		}
	}

	public List<Advert> findAllByPassengers(String registrationNumber) {
		User passenger = userRepo.findByRegistrationNumber(registrationNumber);
		List<UserAdvert> userAdvert = userAdvertRepo.findAllByPassenger(passenger);
		return advertRepo.findAllByPassengersIn(userAdvert);
	}

	public List<Advert> findAllByDriver(User user) {
		return advertRepo.findAllByDriver(user);
	}

	public Advert findOneById(Integer id) {
		return advertRepo.findOneById(id);
	}

	public void cancelPassenger(Advert advert) {
		advert.setPassengerCount((advert.getPassengerCount() - 1));
		UserAdvert userAdvert = userAdvertRepo.findOneByAdvert(advert);
		userAdvert.setStatus(UserAdvertStatus.CANCELLED);
		advertRepo.save(advert);
	}

}
