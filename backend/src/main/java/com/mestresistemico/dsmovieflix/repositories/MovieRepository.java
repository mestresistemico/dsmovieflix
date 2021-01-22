package com.mestresistemico.dsmovieflix.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mestresistemico.dsmovieflix.entities.Genre;
import com.mestresistemico.dsmovieflix.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{

	@Query("SELECT DISTINCT obj FROM Movie obj INNER JOIN obj.genre gen WHERE "
			+ "(COALESCE(:genre) IS NULL OR gen IN :genre)")
	Page<Movie> find(Genre genre, Pageable pageable);
}