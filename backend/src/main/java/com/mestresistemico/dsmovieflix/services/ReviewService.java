package com.mestresistemico.dsmovieflix.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mestresistemico.dsmovieflix.dto.ReviewDTO;
import com.mestresistemico.dsmovieflix.dto.ReviewInsertDTO;
import com.mestresistemico.dsmovieflix.entities.Movie;
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
	
	@Transactional(readOnly = true)
	public Page<ReviewDTO> findAllPaged(Long movieId, PageRequest pageRequest) {
		Movie movie = (movieId == 0) ? null : movieRepository.getOne(movieId);
		Page<Review> page = repository.find(movie, pageRequest);
		repository.findReviewsMovie(page.stream().collect(Collectors.toList()));
		return page.map(x -> new ReviewDTO(x));
	}

	@Transactional(readOnly = true)
	public List<ReviewDTO> findByMovie(Long movieId) {
		Movie movie = (movieId == 0) ? null : movieRepository.getOne(movieId);
		List<Review> list = repository.findByMovie(movie);
		repository.findReviewsMovie(list);
		return list.stream().map(x -> new ReviewDTO(x)).collect(Collectors.toList());
	}

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