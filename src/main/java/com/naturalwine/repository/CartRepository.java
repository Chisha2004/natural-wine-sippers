package com.naturalwine.repository;

import com.naturalwine.entity.CartEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface CartRepository extends JpaRepository<CartEntity, Long> {
    List<CartEntity> findByUserUuid(UUID userIdString);

    Optional<CartEntity> findByUserUuidAndBeverageId(UUID userUuid, Long beverageId);

    @Modifying(clearAutomatically = true)
    @Query("DELETE FROM CartEntity c WHERE c.userUuid = :guestUuid")
    int deleteAllByUserUuid(@Param("user_uuid") UUID guestUuid);
}

