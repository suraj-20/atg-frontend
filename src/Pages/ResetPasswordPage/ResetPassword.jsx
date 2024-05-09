import React, { useState } from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  //   const [state, setState] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const resetPasswordForm = async () => {
  //   console.log("User logged in", formData);

  //   let responseData;
  //   // console.log(process.env.REACT_APP_BASE_URL);
  //   await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/reset-password/:id`, {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       responseData = data;
  //       console.log(data);
  //     })
  //     .catch((error) => console.error("Error in logged in", error));

  //   if (responseData.message) {
  //     alert(responseData.message);
  //     // window.location.replace("/login");
  //   } else {
  //     alert(responseData.message);
  //   }
  // };

  return (
    <div className={`popup signup-popup show d-lg-flex`}>
      <div className="modal-content">
      <div className="modal-header custom-modal-header d-flex justify-content-center mb-4 ">
          Reset Password
        </div>
        <div className="p-4">
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
            }}
            encType="multipart/form-data"
          >
            <div className="container text-center">
              <div className="row">
                <div className="col">
                  <div className="d-flex flex-column gap-2">
                    <input
                      value={formData.password}
                      onChange={handleChange}
                      name="password"
                      type="password"
                      className={`form-control custom-input `}
                      placeholder="Password"
                    />

                    <button className="btn btn-primary rounded-5 d-flex justify-content-center align-items-center mb-4">
                      Forgot
                    </button>

                    <Link
                      to={"/login"}
                      //   onClick={() => setState("forgotPassword")}
                      className="btn d-lg-block text-center forgot"
                    >
                      Login
                    </Link>
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

export default ResetPassword;
