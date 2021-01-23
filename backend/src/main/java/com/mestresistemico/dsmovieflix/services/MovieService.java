package com.mestresistemico.dsmovieflix.services;

import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mestresistemico.dsmovieflix.dto.MovieDTO;
import com.mestresistemico.dsmovieflix.entities.Genre;
import com.mestresistemico.dsmovieflix.entities.Movie;
import com.mestresistemico.dsmovieflix.repositories.GenreRepository;
import com.mestresistemico.dsmovieflix.repositories.MovieRepository;
import com.mestresistemico.dsmovieflix.services.exceptions.ResourceNotFoundException;


@Service
public class MovieService {

	@Autowired
	private MovieRepository repository;

	@Autowired
	private GenreRepository genreRepository;

	@Transactional(readOnly = true)
	public Page<MovieDTO> findAllPaged(Long genreId, PageRequest pageRequest) {
		Genre genre = (genreId == 0) ? null : genreRepository.getOne(genreId);
		Page<Movie> page = repository.find(genre, pageRequest);
		repository.findMoviesGenre(page.stream().collect(Collectors.toList()));
		return page.map(x -> new MovieDTO(x));
	}

	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		Optional<Movie> obj = repository.findById(id);
		Movie entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new MovieDTO(entity);
	}
}