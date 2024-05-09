import React from "react";
import "./SignupMobileView.css";

const SignupMobileView = ({ onClose }) => {
  return (
    <div className="d-flex flex-column p-4 w-100">
      <div className="d-flex justify-content-between  align-items-center mb-4">
        <h4 className="d-flex fw-bold">Create Account</h4>
        <button onClick={onClose} className="btn closeBtn position-absolute">
          <i className="fa-solid fa-circle-xmark"></i>
        </button>
      </div>
      <div className="d-flex">
        <input
          type="text"
          className="form-control custom-input"
          name=""
          id=""
          placeholder="First Name"
        />
        <input
          type="text"
          className="form-control custom-input"
          name=""
          id=""
          placeholder="Last Name"
        />
      </div>
      <input
        type="text"
        className="form-control custom-input"
        name=""
        id=""
        placeholder="Email"
      />
      <input
        type="password"
        className="form-control custom-input"
        name=""
        id=""
        placeholder="Password"
      />
      <input
        type="password"
        className="form-control mb-4 custom-input"
        name=""
        id=""
        placeholder="Confirm Password"
      />
      <ul className="d-flex justify-content-between align-items-center mb-4 p-0">
        <a
          href="/"
          className="btn btn-primary rounded-5 d-flex justify-content-center align-items-center"
        >
          Create Account
        </a>
        <a
          href="/"
          className="btn btn-primary rounded-5 d-flex justify-content-center align-items-center"
        >
          Sign In
        </a>
      </ul>
      <div className="d-flex flex-column gap-2">
        <button className="btn d-flex align-items-center justify-content-center gap-2 button-signup-group">
          <i className="fa-brands fa-facebook"></i> Sign In with Facebook
        </button>
        <button className="btn d-flex align-items-center gap-2 button-signup-group justify-content-center">
          <i className="fa-brands fa-google"></i> Sign In with Google
        </button>
      </div>
      <p className="info-signup text-center">
        By signing up, you agree to our Terms & conditions, Privacy policy
      </p>
    </div>
  );
};

export default SignupMobileView;
