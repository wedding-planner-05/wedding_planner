
import "./App.css";
import Home from "./Home-Page/Home.jsx";
import React from 'react';
import {Route,Routes} from 'react-router-dom';
import PhotographerHomePage from "./Photographer/PhotographerHomePage.jsx";
import PhotoVendorDetails from "./Photographer/PhotoVendorDetails.jsx";
import SignupVendor from "./SignupVendor/SignupVendor.jsx";
import MehendiHomePage from "./Components/Mehendi/MehendiHomePage.jsx";
import UserSignIn from "./Components/UserSignIn/UserSignIn.jsx";
import VendorSignIn from "./Components/VendorSignIn/VendorSignIn.jsx";
import SoundHomePage from "./Sound/SoundHomePage.jsx";
import SoundVendorDetails from "./Sound/SoundVendorDetails.jsx";
import CaterPage from "./CaterVendor/CaterPage.jsx";
import CaterContactpage from "./CaterVendor/CaterContactpage.jsx";

const App = () => {
  return<>
   <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/PhotographerHomePage" element={<PhotographerHomePage/>} />
          <Route path="/PhotoVendorDetails" element={<PhotoVendorDetails/>} />
          <Route path="/MehendiHomePage" element={<MehendiHomePage/>}/>
          <Route path="/vendorSignUp" element={<SignupVendor/>}/>
          <Route path="/userSignIn" element={<UserSignIn/>} />
          <Route path="/CaterVendor" element ={<CaterPage/>}></Route>
          <Route path="/vendorSignIn" element={<VendorSignIn/>}/>
          <Route path="/SoundHomePage" element={<SoundHomePage/>}/>
          <Route path="/SoundVendorDetails" element={<SoundVendorDetails/>} />
          <Route path="/CaterContactpage" element={<CaterContactpage/>}/>
          
  </Routes> 
      </>


}
export default App ;
