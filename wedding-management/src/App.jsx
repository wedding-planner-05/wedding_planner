
import "./App.css";
import Home from "./Home-Page/Home.jsx";
import React from 'react';
import {Route,Routes} from 'react-router-dom';

import PhotographerHomePage from "./Photographer/PhotographerHomePage.jsx";
import DressHomePage from './Dress/DressHomePage.jsx';
import PhotoVendorDetails from "./Photographer/PhotoVendorDetails.jsx";
import SignupVendor from "./SignupVendor/SignupVendor.jsx";
import MehendiHomePage from "./Components/Mehendi/MehendiHomePage.jsx";
import UserSignIn from "./Components/UserSignIn/UserSignIn.jsx";
import VendorSignIn from "./Components/VendorSignIn/VendorSignIn.jsx";
import SoundHomePage from "./Sound/SoundHomePage.jsx";
import SoundVendorDetails from "./Sound/SoundVendorDetails.jsx";

const App = () => {
  return<>
   <Routes>
          <Route path="/" element={<Home/>} />

          <Route path="/DressHomePage" element={<DressHomePage/>} />
          <Route path="/PhotographerHomePage" element={<PhotographerHomePage/>} />
          <Route path="/PhotoVendorDetails" element={<PhotoVendorDetails/>} />
          <Route path="/MehendiHomePage" element={<MehendiHomePage/>}/>
          <Route path="/vendorSignUp" element={<SignupVendor/>}/>
          <Route path="/userSignIn" element={<UserSignIn/>} />
          <Route path="/vendorSignIn" element={<VendorSignIn/>}/>
          <Route path="/SoundHomePage" element={<SoundHomePage/>}/>
          <Route path="/SoundVendorDetails" element={<SoundVendorDetails/>} />
          
  </Routes> 
      </>

}
export default App ;
