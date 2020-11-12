import React, { useReducer } from "react";
import BlogContext from "./BlogContext";
import BlogReducer from "./BlogReducer";

import axios from "axios";

const BlogProvider = (props) => {
  const initialState = {
    blogPost: [],
    loading: true,
    currentBlogPost: null,
  };
  const [state, dispatch] = useReducer(BlogReducer, initialState);
  const { blogPost, loading, currentBlogPost } = state;
  const fetchPost = async () => {
    dispatch({ type: "FETCH_START" });

    await axios.get("/posts").then(({ data }) => {
      dispatch({ type: "GOT_DATA", value: data });
      console.log("data is ", data);
    });
  };

  return (
    <BlogContext.Provider
      value={{
        blogPost: state.blogPost,
        loading: loading,
        currentBlogPost: currentBlogPost,
        fetchPost: fetchPost,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};
export default BlogProvider;
