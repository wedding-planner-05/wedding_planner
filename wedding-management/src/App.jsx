
import "./App.css";
import Home from "./Home-Page/Home.jsx";
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PhotographerHomePage from "./VendorsPages/Photographer/PhotographerHomePage.jsx";
import DressHomePage from './VendorsPages/Dress/DressHomePage.jsx';
import PhotoVendorDetails from "./VendorsPages/Photographer/PhotoVendorDetails.jsx";
import SignupVendor from "./SignIn&SignUP/SignupVendor/SignupVendor.jsx";
import MehendiHomePage from "./VendorsPages/Mehendi/MehendiHomePage.jsx";
import UserSignIn from "./SignIn&SignUP/UserSignIn/UserSignIn.jsx";
import VendorSignIn from "./SignIn&SignUP/VendorSignIn/VendorSignIn.jsx";
import SoundHomePage from "./VendorsPages/Sound/SoundHomePage.jsx";
import SoundVendorDetails from "./VendorsPages/Sound/SoundVendorDetails.jsx";
import UserOtp from "./SignIn&SignUP/UserOtp/UserOtp.jsx";
import GardenHomePage from "./VendorsPages/Garden/GardenHomePage.jsx";
import CaterHomePage from "./VendorsPages/Cater/CaterHomePage.jsx";
import DashBord1 from "./DashBord/DashBord1.jsx";
import DashBord2 from "./DashBord/DashBord2.jsx";
import DashBord from "./DashBord/DashBord3.jsx";
const App = () => {
  return <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/DressHomePage" element={<DressHomePage />} />
      <Route path="/PhotographerHomePage" element={<PhotographerHomePage />} />
      <Route path="/PhotoVendorDetails" element={<PhotoVendorDetails />} />
      <Route path="/MehendiHomePage" element={<MehendiHomePage />} />
      <Route path="/vendorSignUp" element={<SignupVendor />} />
      <Route path="/userSignIn" element={<UserSignIn />} />
      <Route path="/vendorSignIn" element={<VendorSignIn />} />
      <Route path="/SoundHomePage" element={<SoundHomePage />} />
      <Route path="/SoundVendorDetails" element={<SoundVendorDetails />} />
      <Route path="/otpVerify" element={<UserOtp />} />
      <Route path='/GardenHomePage' element={<GardenHomePage />} />
      <Route path='/CaterHomePage' element={<CaterHomePage />} />
      <Route path="/Dashboard" element={<DashBord />} />
      <Route path="/Dashboard1" element={<DashBord1 />} />
      <Route path="/Dashboard2" element={<DashBord2 />} />

    </Routes>
  </>

}
export default App;
