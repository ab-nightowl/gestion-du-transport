package dev.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.entities.Booking;

public interface BookingRepository extends JpaRepository<Booking, Integer>{

}
