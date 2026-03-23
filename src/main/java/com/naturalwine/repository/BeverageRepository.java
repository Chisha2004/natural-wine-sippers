package com.naturalwine.repository;

import com.naturalwine.entity.BeverageEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BeverageRepository extends JpaRepository<BeverageEntity, Long> { }
