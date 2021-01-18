package com.mestresistemico.dsmovieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mestresistemico.dsmovieflix.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{
	User findByEmail(String email); 
}