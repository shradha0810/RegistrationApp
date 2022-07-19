import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        navigate("/");
        if (!(res.status >= 200 && res.status <= 299)) {
          throw new Error("cannout logout");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  return <div></div>;
};

export default Logout;
