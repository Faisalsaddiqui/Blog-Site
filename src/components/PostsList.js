import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import axios from "axios";

const apiEndpoint = "http://localhost/my-site/wp-json/wp/v2/posts";

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch posts from the WordPress REST API
  const fetchPosts = async () => {
    try {
      const response = await axios.get(apiEndpoint, {
        headers: {
          Authorization: `Basic ${btoa("root:Admin@1234567890")}`, // Add your credentials
        },
      });
      setPosts(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(); // Call the fetch function on component mount
  }, []);

  if (loading) return <p>Loading posts…</p>;
  if (error) return <p>Error: {error.message}</p>;

  const postsFound = posts.length > 0; // Check if there are any posts
  if (!postsFound) {
    return <p>No matching posts found.</p>;
  }

  return (
    <div className="posts-list">
      {posts.map((post) => {
        console.log(post); // Log the post object
        return (
          <PostCard key={post.id} post={post} /> 
        );
      })}
    </div>
  );
  
}
