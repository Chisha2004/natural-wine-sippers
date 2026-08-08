package com.naturalwine.entity;

import com.naturalwine.model.UserType;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private UUID uuid;

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column
    private UserType userType;

    @Column(name = "doe", nullable = false, updatable = false)
    private LocalDateTime doe;

    @Column(name = "dlu", nullable = false)
    private LocalDateTime dlu;

    public User() {
    }

    public User(String email, String password, UserType userType) {
        this.email = email;
        this.password = password;
        this.userType = userType;
        this.doe = LocalDateTime.now();
        this.dlu = LocalDateTime.now();
    }
}

