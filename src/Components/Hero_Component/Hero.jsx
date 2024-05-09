import React from "react";
import "./Hero.css"

const Hero = () => {
  return (
    <div className="hero_container container d-flex flex-column h-100 background-text-home">
      <div className="d-flex d-lg-none justify-content-between mt-3">
        <button className="left-arrow-btn">
          {" "}
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="btn join-group">Leave Group</button>
      </div>
      <div className="content">
        <h1 className="text-white">Computer Engineering</h1>
        <p className="text-white mb-5">
          142,765 Computer Engineers follow this
        </p>
      </div>
    </div>
  );
};

export default Hero;
