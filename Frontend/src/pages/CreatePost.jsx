import React from "react";
import "../index.css";
import axios from "axios";
import {useNavigate} from 'react-router-dom'


const CreatePost = () => {
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    axios
      .post("http://localhost:3000/api/post/create-post", formData)
      .then((res) => {
        console.log(res)
        alert("Post is created Successfully");
        e.target.reset();
        navigate("/feed")
      })
      .catch(error);
    {
      console.log(err);
      alert("Error is creating post");
    }
  };

  return (
    <section className="create-post-section">
      <h1> Create Post</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="image" accept="image/*" />
        <input type="text" name="caption" required />
        <button> Submit </button>
      </form>
    </section>
  );
};

export default CreatePost;
