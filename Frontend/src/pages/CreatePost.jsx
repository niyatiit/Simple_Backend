import React from "react";
import "../index.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    axios
      .post("https://simple-backend-mhen.onrender.com/api/post/create-post", formData)
      .then((res) => {
        console.log(res);
        alert("Post is created Successfully");
        e.target.reset();
        navigate("/feed");
      })
      .catch((err) => {
        console.log(err);
        alert("Error in creating post");
      });
  };

  return (
    <section className="create-post-section">
      
      {/* 🔹 Navigation Buttons */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => navigate("/")}>🏠 Home</button>
        <button onClick={() => navigate("/feed")} style={{ marginLeft: "10px" }}>
          📸 Feed
        </button>
      </div>

      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <input type="file" name="image" accept="image/*" required />
        <input type="text" name="caption" placeholder="Enter caption..." required />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default CreatePost;