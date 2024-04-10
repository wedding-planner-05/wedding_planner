
import "./App.css";
import "./CaterVendor/CaterPage.css"
import CaterPage from "./CaterVendor/CaterPage";
import Footer from "./Components/Footer/Footer.jsx";
import "./Components/Footer/Footer.css"
import Home from "./Home-Page/Home.jsx";
import SignupVendor from "./SignupVendor/SignupVendor.jsx";

import React from 'react';

import PhotographerHomePage from './Photographer/PhotographerHomePage.jsx';

function App() {
  return (
    <>
      <Home/>
      {/* <SignupVendor/> */}
      <Footer/>
      
      {/* <CaterPage /> */}
      </>
  )

}
export default App;
