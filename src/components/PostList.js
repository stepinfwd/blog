import React, { useContext, useEffect } from "react";
import BlogContext from "./context/BlogContext";
import PostCard from "./PostCard";

function PostList() {
  const blog = useContext(BlogContext);
  useEffect(() => {
    blog.fetchPost();
  }, []);
  const { blogPost, loading, currentBlogPost } = blog;
  console.log("blogpost is ", blogPost);

  return (
    <div className="posts">
      <div className="container">
        <h2>Posts</h2>
        {!loading ? (
          <div className="posts-grid-container">
            {blogPost.map((post, i) => {
              return (
                <PostCard
                  key={i}
                  title={post.title}
                  image={post.image}
                  author={post.author}
                  date={post.date}
                  id={post.id}
                />
              );
            })}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
export default PostList;
