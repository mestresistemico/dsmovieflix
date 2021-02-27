package com.mestresistemico.dsmovieflix.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mestresistemico.dsmovieflix.entities.Movie;
import com.mestresistemico.dsmovieflix.entities.Review;

public interface ReviewRepository extends JpaRepository<Review, Long>{
	
	@Query("SELECT obj FROM Review obj JOIN FETCH obj.movie WHERE obj IN :reviews")
	List<Review> findReviewsMovie(List<Review> reviews);

	@Query("SELECT DISTINCT obj FROM Review obj INNER JOIN obj.movie mov WHERE "
			+ "(COALESCE(:movie) IS NULL OR mov IN :movie)")
	Page<Review> find(Movie movie, Pageable pageable);
	
	List<Review> findByMovie(Movie movie);
}