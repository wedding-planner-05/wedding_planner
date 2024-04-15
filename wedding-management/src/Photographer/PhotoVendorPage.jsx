import React from "react";
import PhotographerHomePage from "./PhotographerHomePage";
import 


ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
import AboutUs from "../AboutUs/AboutUs";
  
const PhotoVendorPage = () => {
  return (
    <div>
      <div>
        <PhotographerHomePage/>
        <AboutUs/>
        <ContactUs/>
        <Footer/>
      </div>
    </div>
  );
};

export default PhotoVendorPage;
