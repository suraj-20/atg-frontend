import React, { useState } from "react";
import "./AddProduct.css";

const AddPost = () => {
  const [postDetails, setPostDetails] = useState({
    title: "",
    image: "",
    content: "",
    description: "",
  });

  const changeHandler = (e) => {
    setPostDetails({ ...postDetails, [e.target.name]: e.target.value });
  };

  const addPost = async () => {
    console.log("User signed in", postDetails);

    try {
      if (localStorage.getItem("token")) {
        let responseData;
        // console.log(process.env.REACT_APP_BASE_URL);
        await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/posts`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            token: `${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(postDetails),
        })
          .then((res) => res.json())
          .then((data) => (responseData = data))
          .catch((error) => console.log(error));

        if (responseData.message) {
          alert(responseData.message);
          window.location.replace("/");
        } else {
          alert(responseData.message);
        }
      }
    } catch (error) {
      console.error("Error in user signed in.", error);
    }
  };

  return (
    <div className="add-product d-flex gap-3">
      <h1>Adding New Post</h1>
      <div className="addproduct-itemfield">
        <p>Post title</p>
        <input
          value={postDetails.title}
          onChange={changeHandler}
          type="text"
          name="title"
          placeholder="Title"
        />
      </div>

      <div className="addproduct-itemfield">
        <p>Content</p>
        <input
          value={postDetails.content}
          onChange={changeHandler}
          type="text"
          name="content"
          placeholder="Content"
        />
      </div>

      <div className="addproduct-itemfield">
        <p>Description</p>
        <input
          value={postDetails.description}
          onChange={changeHandler}
          type="text"
          name="description"
          placeholder="description"
        />
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          addPost();
        }}
        className="addproduct-btn"
      >
        Add Post
      </button>
    </div>
  );
};

export default AddPost;
