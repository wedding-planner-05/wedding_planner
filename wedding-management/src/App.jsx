
import "./App.css";
import Home from "./Home-Page/Home.jsx";
import React from 'react';
import {Route,Routes} from 'react-router-dom';

const App = () => {
  return<>
   <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/PhotographerHomePage" element={<PhotographerHomePage/>} />
          <Route path="/PhotoVendorDetails" element={<PhotoVendorDetails/>} />
          <Route path="/MehendiHomePage" element={<MehendiHomePage/>}/>
          <Route path="/vendorSignUp" element={<SignupVendor/>}/>
          <Route path="/userSignIn" element={<UserSignIn/>} />
          <Route path="/vendorSignIn" element={<VendorSignIn/>}/>
          
  </Routes> 
      </>
}
export default App;
