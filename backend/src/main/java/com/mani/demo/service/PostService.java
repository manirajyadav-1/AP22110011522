package com.mani.demo.service;

import com.mani.demo.model.Post;
import com.mani.demo.repository.PostRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {
    private final PostRepo postRepo;

    public PostService(PostRepo postRepo) {
        this.postRepo = postRepo;
    }

    // Method to fetch posts by user ID
    public List<Post> getPostsByUserId(Long userId) {
        return postRepo.findByUserId(userId);
    }
}
