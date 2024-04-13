import React from "react";
import PhotoVendorDetails from "./PhotoVendorDetails";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
import AboutUs from "../AboutUs/AboutUs";

const PhotoDetails = () => {
  return (
    <div>
      <PhotoVendorDetails />
      <AboutUs/>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default PhotoDetails;
