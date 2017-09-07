package dev.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.entities.Advert;

public interface AdvertsRepository extends JpaRepository<Advert, Integer> {

}
