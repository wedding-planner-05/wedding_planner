import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";

// import AboutUs from "../Components/About/AboutUs";

import Vendors from "../Components/Vendor/Vendors";
import ContactUs from "../Components/Contact/ContactUs";

function Home() {
  return (
    <>
      <Navbar />  
      <Header />
      <Vendors />
      {/* <AboutUs /> */}
      <ContactUs />
    </>
  );
}

export default Home;
