import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [cred, setCred] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cPassword: "",
  });
  const formhandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCred({ ...cred, [name]: value });
  };
  const registerUser = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, cPassword } = cred;
    const res = await fetch("/register", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email, password, cPassword }),
    });
    const response = await res;
    if (!response || response.status === 422) {
      alert("Registration Failed");
    } else {
      alert("Registrstion Successful");
      navigate("/login");
    }
    setCred({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      cPassword: "",
    });
  };
  return (
    <>
      <div className="container h-100 p-3">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div
              className="card text-black"
              style={{ backgroundColor: "#bebab4" }}
            >
              <div className="card-body p-md-4">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-3 mx-1 mx-md-4 mt-4">
                      Register Here
                    </p>

                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-1">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            name="firstName"
                            value={cred.firstName}
                            onChange={formhandler}
                            className="form-control"
                            placeholder="First Name"
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-1">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            name="lastName"
                            value={cred.lastName}
                            onChange={formhandler}
                            className="form-control"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-1">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            name="email"
                            value={cred.email}
                            onChange={formhandler}
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-1">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            name="password"
                            value={cred.password}
                            onChange={formhandler}
                            className="form-control"
                            placeholder="Password"
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-1">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            name="cPassword"
                            value={cred.cPassword}
                            onChange={formhandler}
                            className="form-control"
                            placeholder="Confirm Your Password"
                          />
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          onClick={registerUser}
                          className="btn btn-primary m-3"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
