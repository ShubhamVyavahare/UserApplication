package com.example.userserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.userserver.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, String>{

}
