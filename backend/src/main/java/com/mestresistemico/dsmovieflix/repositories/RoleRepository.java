package com.mestresistemico.dsmovieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.mestresistemico.dsmovieflix.entities.Role;

public interface RoleRepository extends JpaRepository<Role, Long>{
	
}