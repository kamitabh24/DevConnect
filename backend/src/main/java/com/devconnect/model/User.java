package com.devconnect.model;

import jakarta.persistence.*;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String password;
    private String bio;
    private String skills;
    private String githubLink;

    // Getters and Setters
}