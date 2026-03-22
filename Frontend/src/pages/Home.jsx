import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      
      {/* 🔹 Navbar */}
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

      {/* 🔹 Hero Section */}
      <div className="hero-section">
        <h1>Welcome to My WebPage 🚀</h1>
        <p>Share your thoughts, images, and explore posts from others.</p>

        <div className="hero-buttons">
          <button onClick={() => navigate("/feed")}>
            📸 Explore Feed
          </button>

          <button onClick={() => navigate("/create-post")}>
            ➕ Create Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;