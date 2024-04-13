
import "./App.css";
import Home from "./Home-Page/Home.jsx";
import React from 'react';
import {Route,Routes} from 'react-router-dom';


import PhotographerHomePage from './Photographer/PhotographerHomePage';
import MehendiHomePage from "./Components/Mehendi/MehendiHomePage.jsx";
import PhotoVendorDetails from "./Photographer/PhotoVendorDetails.jsx";

const App = () => {
  return<>




   <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/PhotographerHomePage" element={<PhotographerHomePage/>} />
          <Route path="/PhotoVendorDetails" element={<PhotoVendorDetails/>} />
          <Route path="/MehendiHomePage" element={<MehendiHomePage/>}/>
          
  </Routes> 

      </>
}
export default App;
