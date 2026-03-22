import React, { useEffect, useState } from "react";
import "../index.css";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/post/fetch-all-post")
      .then((res) => {
        // console.log("API Data:", res.data);
        setPosts(res.data.post);
      });
  }, []); // ✅ only run once

  return (
    <section className="feed-section">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="post-card">
            <img src={post.image} alt="Image"  />
            <p>{post.caption}</p>
          </div>
        ))
      ) : (
        <h1>No Post is available</h1>
      )}
    </section>
  );
};

export default Feed;