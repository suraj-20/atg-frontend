import React from "react";
import "./Posts.css";
import PostCard from "../PostCards_Component/PostCard";

import RecomendedGroup from "../Group_Component/RecomendedGroup";

const Posts = () => {
  return (
    <div className="post_container container mx-auto d-flex gap-5 justify-content-center">
      <div className="posts-center position-relative">
        <main className="d-flex flex-column gap-4">
          <PostCard />
        </main>
      </div>
      <div className="right-container d-none d-lg-flex flex-column mt-4">
        <RecomendedGroup />
      </div>
    </div>
  );
};

export default Posts;
