package com.naturalwine.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "users")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(name = "doe", nullable = false, updatable = false)
    private LocalDateTime doe;

    @Column(name = "dlu", nullable = false)
    private LocalDateTime dlu;

    public UserEntity() {
    }

    public UserEntity(String email, String password) {
        this.email = email;
        this.password = password;
        this.doe = LocalDateTime.now();
        this.dlu = LocalDateTime.now();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public LocalDateTime getDoe() {
        return doe;
    }

    public void setDoe(LocalDateTime doe) {
        this.doe = doe;
    }

    public LocalDateTime getDlu() {
        return dlu;
    }

    public void setDlu(LocalDateTime dlu) {
        this.dlu = dlu;
    }
}

