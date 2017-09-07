package dev.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.entities.Advert;

public interface AdvertRepository extends JpaRepository<Advert, String> {

}
