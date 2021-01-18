package com.mestresistemico.dsmovieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.mestresistemico.dsmovieflix.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{
}