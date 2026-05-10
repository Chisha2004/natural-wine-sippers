package com.naturalwine.repository;

import com.naturalwine.entity.CartEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CartRepository extends JpaRepository<CartEntity, Long> {
    List<CartEntity> findByUserId(Long userId);
    Optional<CartEntity> findByUserIdAndBeverageId(Long userId, Long beverageId);
}

