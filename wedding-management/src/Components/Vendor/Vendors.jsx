import React from "react";
import "./Vendor.css";
import { FaHeartPulse } from "react-icons/fa6";

const Vendors = () => {
  return (

    <div className="vendor-div container mt-5 p-5">
        <h3 className="vendor-text">Vendors Categories</h3>
   <span className="vendor-heart" style={{color:"crimson"}}>______________<FaHeartPulse/>  _______________</span><br />

<br />


      <h2 style={{ fontSize: "1.5vw" }} className="text-center">
        Find trusted wedding services in all Indore area’s & Book Verified
        Vendors in simple steps.
      </h2>

      <div className="vendor-category mt-5" >
        <div
          className="vendor-img d-flex justify-content-center  align-item-center"
          style={{
            width: "300px",
            height: "400px",
          }}
        >
          <img src="/images/vendor1.png" alt="teri " />
          <div className="vendor-button">
            <button className="btn btn-warning text-white">View More</button>
          </div>
        </div>

        <div
          className="vendor-img d-flex justify-content-center align-item-center"
          style={{
            width: "300px",
            height: "400px",
          }}
        >
          <img src="/images/vendor2.png" alt="teri " />
          <div className="vendor-button">
            <button className="btn btn-danger text-white">View More</button>
          </div>
        </div>

        <div
          className="vendor-img d-flex justify-content-center align-item-center"
          style={{
            width: "300px",
            height: "400px",
          }}
        >
          <img src="/images/vendor3.png" alt="teri " />
          <div className="vendor-button">
            <button className="btn btn-warning text-white">View More</button>
          </div>
        </div>

        <div
          className="vendor-img d-flex justify-content-center align-item-center"
          style={{
            width: "300px",
            height: "400px",
          }}
        >
          <img src="/images/vendor4.png" alt="teri " />
          <div className="vendor-button">
            <button className="btn btn-warning text-white">View More</button>
          </div>
        </div>
        <div
          className="vendor-img d-flex justify-content-center align-item-center"
          style={{
            width: "300px",
            height: "400px",
          }}
        >
          <img src="/images/vendor5.png" alt="teri " />
          <div className="vendor-button">
            <button className="btn btn-warning text-white">View More</button>
          </div>
        </div>
        <div
          className="vendor-img d-flex justify-content-center align-item-center"
          style={{
            width: "300px",
            height: "400px",
          }}
        >
          <img src="/images/vendor6.png" alt="teri " />
          <div className="vendor-button">
            <button className="btn btn-warning text-white">View More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vendors;
