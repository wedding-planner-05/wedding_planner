
import "./App.css";
import Home from "./Home-Page/Home.jsx";
import React from 'react';
import {Route,Routes} from 'react-router-dom';


import PhotographerHomePage from './Photographer/PhotographerHomePage';
import MehendiHomePage from "../Mehendi/MehendiHomePage.jsx";
import SignupVendor from "./SignupVendor/SignupVendor.jsx";
import UserSignIn from "./Components/UserSignIn/UserSignIn.jsx";
import VendorSignIn from "./Components/VendorSignIn/VendorSignIn.jsx";

const App = () => {
  return<>
  {/* <Home/> */}
  {/* <PhotographerHomePage/> */}




  <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/PhotographerHomePage" element={<PhotographerHomePage/>} />
        <Route path="/MehendiHomePage" element={<MehendiHomePage/>}/>
        <Route path="/vendorSignUp" element={<SignupVendor/>}/>
        <Route path="/userSignIn" element={<UserSignIn/>} />
        <Route path="/vendorSignIn" element={<VendorSignIn/>}/>
  </Routes>

      </>
     

}
export default App;
