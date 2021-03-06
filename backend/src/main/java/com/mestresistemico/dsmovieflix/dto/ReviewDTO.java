package com.mestresistemico.dsmovieflix.dto;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;

import com.mestresistemico.dsmovieflix.entities.Review;

public class ReviewDTO implements Serializable{
	private static final long serialVersionUID = 1L;

	private Long id;
	@NotBlank(message = "Campo obrigatório")
	private String text;
	private String userName;
	private Long movieId;
	
	public ReviewDTO () {}
	
	public ReviewDTO(Long id, String text) {
		super();
		this.id = id;
		this.text = text;
	}

	public ReviewDTO(Review entity) {
		id = entity.getId();
		text = entity.getText();
		userName = entity.getUser().getName();
		movieId = entity.getMovie().getId();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public Long getMovieId() {
		return movieId;
	}

	public void setMovieId(Long movieId) {
		this.movieId = movieId;
	}
}