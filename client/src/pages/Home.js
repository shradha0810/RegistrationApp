import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const gotologin=()=>{
    return navigate("/login");
  }
  const gotoregister=()=>{
    return navigate("/register");
  }
  return (
    <div className="App container h-100 p-3">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
          <div
            className="card text-black"
            style={{ backgroundColor: "#bebab4" }}
          >
            <div className="card-body p-md-4">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p className="text-center h4 fw-bold mb-1 mx-1 mx-md-1 mt-1">
                    Welcome to this Application
                  </p>

                  <p className="text-center mb-1 mx-1 mx-md-1 mt-1">
                    This is a simple Registeration and Login Page.
                    You'll be able to Register yourself in the register Page
                    Then you'll be redirected to login page. Once you login
                    you can see your filled data in about page. 
                    If you are not logged in you cannot open about page.
                    You can also logout anytime.
                    <br/> 
                    <br/>
                    <br/>
                    By the way, Hye I am Shradha Tiwari.
                    <br />
                    This is my very first MERN Application.
                    <br />
                    I am a Final Year student at NIT Agartala
                    <br />
                    I am from New Delhi,India
                    <br />
                    <span>
                      <b>My Email:</b>
                    </span>
                    shradhatiwari0810@gmail.com
                    <br />
                  </p>
                  <button className="btn btn-primary m-3" onClick={gotoregister}>
                    Register
                  </button>
                  
                  <button className="btn btn-primary" onClick={gotologin}>
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
