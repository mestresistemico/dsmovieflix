package com.mestresistemico.dsmovieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.mestresistemico.dsmovieflix.entities.Genre;

public interface GenreRepository extends JpaRepository<Genre, Long>{
}