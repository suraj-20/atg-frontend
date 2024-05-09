import React, { useState } from "react";
import "./LoginSignup.css";
import image from "../../Assets/signup-OCG-APNN.svg";
import { Link } from "react-router-dom";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const signup = async () => {
    console.log("User signed in", formData);
    try {
      let responseData;
      console.log(process.env.REACT_APP_BASE_URL);
      await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/register`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => (responseData = data))
        .catch((error) => console.log(error));

      if (responseData.message) {
        localStorage.setItem("token", responseData.token);
        alert(responseData.message);
        window.location.replace("/login");
      } else {
        alert(responseData.message);
      }
    } catch (error) {
      console.error("Error in user signed in.", error);
    }
  };

  const login = async () => {
    console.log("User logged in", formData);

    let responseData;
    // console.log(process.env.REACT_APP_BASE_URL);
    await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        responseData = data;
        console.log(data);
      })
      .catch((error) => console.error("Error in logged in", error));

    if (responseData.user) {
      localStorage.setItem("token", responseData.token);
      alert(responseData.message);
      window.location.replace("/");
    } else {
      alert(responseData.message);
    }
  };

  const forgotPasswordForm = async () => {
    console.log("User logged in", formData);

    let responseData;
    // console.log(process.env.REACT_APP_BASE_URL);
    await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/forgot-password`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        responseData = data;
        console.log(data);
      })
      .catch((error) => console.error("Error in logged in", error));

    if (responseData.message) {
      alert(responseData.message);
    } else {
      alert(responseData.message);
    }
  };

  return (
    <div className={`popup signup-popup show d-lg-flex`}>
      <div className="modal-content">
        <div className="modal-header custom-modal-header d-flex justify-content-center mb-4 ">
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now 🤘🏼
        </div>
        <div className="p-4">
          <div className="d-flex justify-content-between  align-items-center mb-4">
            <h4 className="d-flex fw-bold">
              {state === "signup" ? "Create Account" : "Sign in"}
            </h4>
            {state === "signup" ? (
              <button onClick={() => setState("login")} className="btn">
                Already have an account?
                <span className="text-primary"> Login</span>
              </button>
            ) : (
              <button onClick={() => setState("signup")} className="btn">
                Create new Account?
                <span className="text-primary"> Sign Up</span>
              </button>
            )}
          </div>
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              state === "Login"
                ? login()
                : state === "signup"
                ? signup()
                : forgotPasswordForm();
            }}
            encType="multipart/form-data"
          >
            <div className="container text-center">
              <div className="row">
                <div className="col">
                  <div className="d-flex flex-column gap-2">
                    {state === "signup" ? (
                      <input
                        value={formData.name}
                        onChange={handleChange}
                        name="username"
                        type="text"
                        className="form-control custom-input"
                        placeholder="Name"
                        required
                      />
                    ) : (
                      <></>
                    )}
                    <input
                      value={formData.email}
                      onChange={handleChange}
                      name="email"
                      type="text"
                      className="form-control custom-input"
                      placeholder="Email"
                    />
                    <input
                      value={formData.password}
                      onChange={handleChange}
                      name="password"
                      type="password"
                      className={`form-control custom-input ${
                        state === "forgotPassword"
                          ? "hidden"
                          : state === "resetPassword"
                          ? "show"
                          : ""
                      }`}
                      placeholder="Password"
                    />

                    {state === "forgotPassword" ? (
                      <button className="btn btn-primary rounded-5 d-flex justify-content-center align-items-center mb-4">
                        Forgot
                      </button>
                    ) : (
                      <button className="btn btn-primary rounded-5 d-flex justify-content-center align-items-center mb-4">
                        {state === "signup" ? "Signup" : "Login"}
                      </button>
                    )}
                    <div className="d-flex flex-column gap-2">
                      <button
                        type="submit"
                        className="btn d-flex align-items-center justify-content-center gap-2 button-signup-group"
                      >
                        <i className="fa-brands fa-facebook"></i> Sign In with
                        Facebook
                      </button>
                      <button
                        type="submit"
                        className="btn d-flex align-items-center gap-2 button-signup-group justify-content-center"
                      >
                        <i className="fa-brands fa-google"></i> Sign In with
                        Google
                      </button>
                    </div>
                    <Link
                      onClick={() => setState("forgotPassword")}
                      className="btn d-lg-block text-center forgot"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </div>
                <div className="col d-none d-lg-flex">
                  <div className="d-flex  flex-column">
                    <img src={image} alt="" />
                    <p className="info-signup">
                      By signing up, you agree to our Terms & conditions,
                      Privacy policy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
