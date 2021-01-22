package com.mestresistemico.dsmovieflix.dto;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;

import com.mestresistemico.dsmovieflix.entities.Review;

public class ReviewDTO implements Serializable{
	private static final long serialVersionUID = 1L;

	private Long id;
	@NotBlank(message = "Campo obrigatório")
	private String text;
	
	public ReviewDTO () {}
	
	public ReviewDTO(Long id, String text) {
		super();
		this.id = id;
		this.text = text;
	}

	public ReviewDTO(Review entity) {
		id = entity.getId();
		text = entity.getText();
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
}