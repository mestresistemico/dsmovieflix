package com.mestresistemico.dsmovieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.mestresistemico.dsmovieflix.entities.Review;

public interface ReviewRepository extends JpaRepository<Review, Long>{
}