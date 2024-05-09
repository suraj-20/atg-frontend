import React, { useEffect, useState } from "react";
import { FaComment } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";

const PostCard = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check authentication status when the component mounts
    // Example: Check if there's a token in localStorage or cookies
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Set isLoggedIn to true if token exists
  }, []);

  const fetchInfo = async () => {
    await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/posts`)
      .then((res) => res.json())
      .then((data) => {
        setAllPosts(data.allPosts);
        // setAllPosts(allPosts);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (postId) => {
    if (!isLoggedIn) {
      // User is not logged in, prevent deletion and prompt to log in
      alert("Please log in to delete posts.");
      return;
    }
    try {
      if (localStorage.getItem("token")) {
        await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/posts/${postId}`, {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            token: `${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          // body: JSON.stringify({ postId }),
        });
        await fetchInfo();
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleLike = async (postId) => {
    if (!isLoggedIn) {
      // User is not logged in, prevent liking and prompt to log in
      alert("Please log in to like posts.");
      return;
    }
    try {
      if (localStorage.getItem("token")) {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/api/v1/posts/${postId}/like`,
          {
            method: "POST",
            token: `${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to like post");
        }

        // Update the local state with the new like count
        const updatedPosts = allPosts.map((allPosts) =>
          allPosts._id === postId
            ? { ...allPosts, likes: allPosts.likes + 1 }
            : allPosts
        );
        setAllPosts(updatedPosts);
      }
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  const handleComment = async (postId) => {
    const comment = window.prompt("Enter your comment");

    if (comment) {
      try {
        if (localStorage.getItem("token")) {
          const response = await fetch(
            `${process.env.REACT_APP_BASE_URL}/api/v1/posts/${postId}/comment`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                token: `${localStorage.getItem("token")}`,
              },
            }
          );

          if (!response.ok) {
            throw new Error("Failed to add comment");
          }

          // Update the local state with the new comment
          const updatedPosts = allPosts.map((allPosts) =>
            allPosts._id === postId
              ? { ...allPosts, comments: [...allPosts.comments, comment] }
              : allPosts
          );

          if (response.ok) {
            alert("Comment added successfully");
            setAllPosts(updatedPosts);
          }
        }
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    }
  };

  return (
    <>
      {allPosts.map((card, i) => {
        return (
          <div
            key={card._id}
            className="card-container d-flex flex-column border border-1 rounded-2"
          >
            <img
              src={card.image}
              style={card.image ? { display: "block" } : { display: "none" }}
              alt=""
              className="imagePost"
            />
            <div className="p-4">
              <h3 className="d-flex">{card.title}</h3>
              <div className="d-flex gap-6 justify-content-between">
                <h4>{card.content}</h4>
                <div className="btn align-self-start">
                  <div className="dropdown">
                    <div typeof="button">
                      <i className="fa-solid fa-ellipsis"></i>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="d-flex align-items-center gap-5 list-unstyled ">
                <li
                  className="d-flex align-items-center gap-1"
                  style={
                    card.description
                      ? { display: "block" }
                      : { display: "none" }
                  }
                >
                  {card.icon1} {card.description}
                </li>
              </ul>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-none d-lg-block pe-4">
                    <i className="fa-solid fa-eye"></i>
                    <span>1.4k views</span>
                  </div>
                  <button
                    onClick={() => removeProduct(card._id)}
                    className="btn d-flex align-items-center gap-2"
                  >
                    <FaTrash /> Delete
                  </button>
                  <button
                    onClick={() => handleLike(card._id)}
                    className="btn d-flex align-items-center gap-2"
                  >
                    <FaRegThumbsUp /> Like ({card.likes})
                  </button>
                  <button
                    onClick={() => handleComment(card._id)}
                    className="btn d-flex align-items-center gap-2"
                  >
                    <FaComment /> Comment
                  </button>
                  {/* {card.comments.map((comment, index) => (
                      <span key={index}>{comment}</span>
                    ))} */}
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {/* <ul>
        {allPosts.comments?.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul> */}
    </>
  );
};

export default PostCard;
