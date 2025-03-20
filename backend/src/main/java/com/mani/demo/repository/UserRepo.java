package com.mani.demo.repository;

import com.mani.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepo extends JpaRepository<User, Long> {
    @Query("SELECT u FROM User u ORDER BY SIZE(u.posts) DESC")
    List<User> findTopUsers();
}
