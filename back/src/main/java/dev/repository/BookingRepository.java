package dev.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.entities.Booking;
import dev.entities.User;

public interface BookingRepository extends JpaRepository<Booking, Integer> {

	List<Booking> findAllByDriver(User driver);

	List<Booking> findAllByDriverIsNull();

}
