import React, { useContext, useEffect } from "react";
import BlogContext from "./context/BlogContext";

function PostList() {
  const blog = useContext(BlogContext);
  useEffect(() => {
    blog.fetchPost();
  }, []);
  const { blogPost } = blog;
  console.log("blogpost is ", blogPost);

  return (
    <div className="posts">
      <div className="container">
        <h2>Posts</h2>
        {!loading ? (
          <div className="posts-grid-container">
            {blogPosts.map((post, i) => {
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
