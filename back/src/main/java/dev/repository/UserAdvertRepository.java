package dev.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.entities.Advert;
import dev.entities.User;
import dev.entities.UserAdvert;

public interface UserAdvertRepository extends JpaRepository<UserAdvert, Integer>{

	List<UserAdvert> findAllByPassenger(User passenger);
	
	UserAdvert findOneByAdvert(Advert advert);

	UserAdvert findByPassengerAndAdvert(User passenger, Advert advert);
}
