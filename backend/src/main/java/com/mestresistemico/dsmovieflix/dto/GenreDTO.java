package com.mestresistemico.dsmovieflix.dto;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;

import com.mestresistemico.dsmovieflix.entities.Genre;

public class GenreDTO implements Serializable{
	private static final long serialVersionUID = 1L;

	private Long id;
	@NotBlank(message = "Campo obrigatório")
	private String name;
	
	public GenreDTO () {}
	
	public GenreDTO(Long id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	public GenreDTO(Genre entity) {
		id = entity.getId();
		name = entity.getName();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}