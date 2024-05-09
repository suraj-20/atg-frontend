import React from "react";
import "./SubHeader.css"

const SubHeader = () => {
  return (
    <div className="subHeader_container d-flex mx-auto container sticky-subHeader">
      <div className="desktop-view-subHeader d-none d-lg-flex">
        <ul className="nav my-2  nav-underline">
          <li className="nav-item">
            <a href="/" className="nav-link active">
              All Post (22)
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Article
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Event
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Education
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Job
            </a>
          </li>
        </ul>
        <div className="d-flex my-2 d-none d-lg-flex align-items-center">
          <button type="button" className="btn btn-filter">
            Write Post <i className="fa-solid fa-sort-down"></i>
          </button>
          <button className="btn btn-primary ms-2 gap-2 d-flex align-items-center">
            <i className="fa-solid fa-user-plus"></i> Join Group
          </button>
        </div>
      </div>

      <div className="mobile-view-subHeader">
        <div className="text-main-posts">Post(354)</div>
        <div className="d-flex my-2 d-flex align-items-center">
          <button type="button" className="btn btn-filter d-flex gap-2 align-items-center">
            Filter : All <i className="fa-solid fa-sort-down"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
