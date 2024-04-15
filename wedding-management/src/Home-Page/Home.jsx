
import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";



import Vendors from "../Components/Vendor/Vendors";
import ContactUs from "../Components/Contact/ContactUs";
import Footer from "../Components/Footer/Footer";
import AboutUs from "../Components/AboutUs/AboutUs";

function Home() {
  return (
    <>
      <Navbar />  
      <Header />
      <Vendors />
      <AboutUs/>
      <ContactUs />
      <Footer/>
    </>
  );
}
export default Home;
