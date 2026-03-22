import React, { useEffect, useState } from "react";
import "../index.css";
import "../App.css"; // ✅ important (for navbar styles)
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://simple-backend-mhen.onrender.com/api/post/fetch-all-post")
      .then((res) => {
        setPosts(res.data.post);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {/* 🔹 SAME NAVBAR AS HOME */}
      <nav className="navbar">
        <h2 className="logo">My WebPage</h2>

        <div className="nav-buttons">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/feed")}>Feed</button>
          <button onClick={() => navigate("/create-post")}>
            + Create Post
          </button>
        </div>
      </nav>

      {/* 🔹 Feed Section */}
      <section className="feed-section">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post._id} className="post-card">
              <img src={post.image} alt="Image" />
              <p>{post.caption}</p>
            </div>
          ))
        ) : (
          <h1>No Post is available</h1>
        )}
      </section>
    </div>
  );
};

export default Feed;