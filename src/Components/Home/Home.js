import React, { useEffect, useState } from "react";
import Post from "../Post/Post";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  });
  return (
    <div>
      <h1>This is home</h1>
      <h2>I have hot {posts.length} posts</h2>
      {posts.map((post) => (
        <Post post={post}></Post>
      ))}
    </div>
  );
};

export default Home;
