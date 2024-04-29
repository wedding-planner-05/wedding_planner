import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us container-fluid mt-5">
      <div className="text-center">
        <h4 className="" style={{ color: "crimson" }}>
          About us
        </h4>
      </div>
      <div
        className="row d-flex justify-content-around  py-2 m-1"
        style={{
          borderTop: "0px solid ",
          borderBottom: "35px solid crimson",
          borderLeft: "20px solid crimson",
          borderRight: "20px solid crimson",
        }}
      >
        <div className="col-md-6 p-5">
          <p>
            Welcome to the National  Community Association "NHCA". We are
            a diverse alliance of businesses from all ends of the 
            experience, from manufacturers and importers of molasses, pipes and
            accessories to distributors,lounges and /shisha retail
            stores. If you are a business, please join us and help us
            defend and protect your business, our culture and community. If you
            are an interested member of the public, welcome. Please enjoy
            learning about and its unique culture and practice.
          </p>
        </div>
        <div className="px-5 col-md-6 p-4 d-flex">
          <img
            className="img-fluid custom-imgs "
            src="images/p6.webp"
            alt="Image not display"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
