
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
import DashBord1 from "./DashBord/DashBord1.jsx";
import DashBord2 from "./DashBord/DashBord2.jsx";
import DashBord from "./DashBord/DashBord3.jsx";
import CaterPage from "./VendorsPages/Cater/CaterPage.jsx";
// import CaterPageInfos from "./VendorsPages/Cater/CaterPageInfos.jsx";
import CaterContactpage from "./VendorsPages/Cater/CaterContactpage.jsx";

const App = () => {
  return <>
    <Routes>
      <Route path="/userSignIn" element={<UserSignIn />} />
      <Route path="/vendorSignIn" element={<VendorSignIn />} />
      <Route path="/" element={<Home />} />
      <Route path="/otpVerify" element={<UserOtp />} />
      <Route path="/DressHomePage" element={<DressHomePage />} />
      <Route path="/PhotographerHomePage" element={<PhotographerHomePage />} />
      <Route path="/PhotoVendorDetails" element={<PhotoVendorDetails />} />
      <Route path="/MehendiHomePage" element={<MehendiHomePage />} />
      <Route path="/vendorSignUp" element={<SignupVendor />} />
      <Route path="/SoundHomePage" element={<SoundHomePage />} />
      <Route path="/SoundVendorDetails" element={<SoundVendorDetails />} />
      <Route path='/GardenHomePage' element={<GardenHomePage />} />
      <Route path="/caterpage" element={<CaterPage />} />
      <Route path="/dashboard" element={<DashBord />} />
      <Route path="/dashboard1" element={<DashBord1 />} />
      <Route path="/dashboard2" element={<DashBord2 />} />
      <Route path="/CaterContactpage" element={<CaterContactpage />} />
      <Route path="/vendorSignIn" elementm = {<VendorSignIn/>}/>
    </Routes>


  </>

}
export default App;
