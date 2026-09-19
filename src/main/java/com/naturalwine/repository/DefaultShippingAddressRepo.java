package com.naturalwine.repository;

import com.naturalwine.entity.DefaultShippingAddress;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface DefaultShippingAddressRepo extends JpaRepository<DefaultShippingAddress, Long> {
    Optional<DefaultShippingAddress> findByUserUuid(UUID userUuid);
}
