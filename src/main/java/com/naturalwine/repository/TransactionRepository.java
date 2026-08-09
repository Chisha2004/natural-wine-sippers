package com.naturalwine.repository;

import com.naturalwine.entity.Order;
import com.naturalwine.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    List<Transaction> findAllByOrderId(Long orderId);
}