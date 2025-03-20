import { useEffect, useState } from "react";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = () => {
      axios.get("http://localhost:8080/users/1/posts")
        .then(response => setPosts(response.data))
        .catch(error => console.error("Error fetching feed:", error));
    };

    fetchPosts();
    const interval = setInterval(fetchPosts, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Live Feed</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong>{post.content}</strong> - by {post.user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feed;
