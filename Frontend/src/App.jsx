import { useState } from "react";
import "./App.css";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import Feed from "./pages/Feed";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/create-post" element={<CreatePost/>}></Route>
        <Route path="/feed" element={<Feed/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
