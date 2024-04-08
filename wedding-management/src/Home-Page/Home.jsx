
import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";

import AboutUs from "../Components/AboutUs";

import Vendors from "../Components/Vendors";
import ContactUs from "../Components/Contact/ContactUs";

function Home() {
  return (
    <>
      <Navbar />  
      <Header />
      <Vendors />
      <AboutUs />
      <ContactUs />
    </>
  );
}
export default Home;
