package com.devshehan.employeemanagementapi.model;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
@Table(name = "employeeTable")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
}
