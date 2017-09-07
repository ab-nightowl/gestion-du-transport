package dev.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.entities.Vehicle;

public interface VehicleRepository extends JpaRepository<Vehicle, String>{

}
