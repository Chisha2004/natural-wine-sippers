package com.naturalwine.repository;

import com.naturalwine.entity.Beverage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BeverageRepository extends JpaRepository<Beverage, Long> { }
