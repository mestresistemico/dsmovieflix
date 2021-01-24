package com.mestresistemico.dsmovieflix.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mestresistemico.dsmovieflix.dto.ReviewInsertDTO;
import com.mestresistemico.dsmovieflix.entities.Review;
import com.mestresistemico.dsmovieflix.repositories.MovieRepository;
import com.mestresistemico.dsmovieflix.repositories.ReviewRepository;

@Service
public class ReviewService {

	@Autowired
	private ReviewRepository repository;

	@Autowired
	private MovieRepository movieRepository;
	
	@Autowired
	private AuthService authService;
	
	@Transactional
	public ReviewInsertDTO insert(ReviewInsertDTO dto) {
		Review entity = new Review();
		entity.setText(dto.getText());
		entity.setMovie(movieRepository.getOne(dto.getMovieId()));
		entity.setUser(authService.authenticated());
		entity = repository.save(entity);
		return new ReviewInsertDTO(entity);
	}
}