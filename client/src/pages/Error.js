import React from "react";

const Error = () => {
  return (
    <>
      <div className="container h-100 p-3">
        <div className="row d-flex justify-content-center align-items-center h-100 ">
          <div className="col-lg-12 col-xl-11 ">
            <div className="card text-black" style={{ backgroundColor: "#bebab4" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      404
                    </p>

                    <p className="text-center mb-5 mx-1 mx-md-4 mt-4">
                      OOPS!! Page Not Found
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

export default Error;
