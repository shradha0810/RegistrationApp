import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const [showData, setShowData] = useState({});
  const renderAboutPage = async () => {
    try {
      const data = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const jsondata = await data.json();
      if (!data.status === 200) {
        throw new Error("User not found");
      }
      setShowData(jsondata);
    } catch (error) {
      console.log(error.message);
      navigate("/login");
    }
  };
  useEffect(() => {
    renderAboutPage();
  });
  return (
    <>
      <div className="container h-100 p-3">
        <div className="row d-flex justify-content-center align-items-center h-100 ">
          <div className="col-lg-12 col-xl-11 ">
            <div
              className="card text-black"
              style={{ backgroundColor: "#bebab4" }}
            >
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      ABOUT YOU
                    </p>

                    <p className="text-center mb-5 mx-1 mx-md-4 mt-4">
                      Hye <b>{showData.firstName + " " + showData.lastName}</b>
                      <br />
                      Your Email: <b>{showData.email}</b>
                      <br />
                      <br />
                      <br />
                      DATA COLLECTION FROM DATABASE SUCCESSFUL!!!
                    </p>
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

export default About;
