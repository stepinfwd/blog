import React, { useContext, useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import "./App.css";
import Hero from "./components/Hero/Hero";
import BlogProvider from "./components/context/BlogProvider";
import BlogContext from "./components//context/BlogContext";
import blogContext from "./components//context/BlogContext";
import PostList from "./components/PostList";
function App() {
  return (
    <BlogProvider>
      <div className="App">
        <Navbar />

        <Hero></Hero>
        <PostList />
      </div>
    </BlogProvider>
  );
}

export default App;
