import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="container-fluid mt-5">
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
          Welcome to the National Wedding Community Association "NWCA". We are a diverse alliance of businesses from all ends of the wedding experience, from manufacturers and importers of dresses, suits, and accessories to distributors, wedding venues, and bridal shops. If you are a wedding business, please join us and help us defend and protect your business, our culture, and community. If you are an interested member of the public, welcome. Please enjoy learning about weddings and their unique culture and practices.
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
