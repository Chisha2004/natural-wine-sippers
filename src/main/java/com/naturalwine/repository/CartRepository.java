package com.naturalwine.repository;

import com.naturalwine.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface CartRepository extends JpaRepository<Cart, Long> {
    Optional<Cart> findByUserUuid(UUID userUuid);

    @Modifying(clearAutomatically = true)
    @Query("DELETE FROM Cart c WHERE c.userUuid = :guestUuid")
    int deleteAllByUserUuid(UUID guestUuid);
}

