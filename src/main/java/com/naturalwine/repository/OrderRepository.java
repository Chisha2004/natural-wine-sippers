package com.naturalwine.repository;

import com.naturalwine.entity.Cart;
import com.naturalwine.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface OrderRepository extends JpaRepository<Order, Long> {
    Optional<Order> findByCartId(Long cartId);
}