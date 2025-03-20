import React, { useEffect, useState } from "react";
import axios from "axios";

const TrendingPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/posts/trending")
      .then(response => setPosts(response.data))
      .catch(error => console.error("Error fetching trending posts:", error));
  }, []);

  return (
    <div>
      <h2>Trending Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong>{post.content}</strong> - {post.comments.length} Comments
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingPosts;
