
import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";



import Vendors from "../Components/Vendor/Vendors";
import Footer from "../Components/Footer/Footer";
import AboutUs from "../Components/AboutUs/AboutUs";
import ContactUs from "../Components/ContactUs/ContactUs";


function Home() {
  return (
    <>
      <Navbar />  
      <Header />
      <Vendors /> 
      <AboutUs/>
      <ContactUs/>
      <Footer/>
    </>
  );
}
export default Home;
