
import "./App.css";
import Home from "./Home-Page/Home.jsx";
import React from 'react';
import {Route,Routes} from 'react-router-dom';


import PhotographerHomePage from './Photographer/PhotographerHomePage';
import MehendiHomePage from "../Mehendi/MehendiHomePage.jsx";

const App = () => {
  return<>
  {/* <Home/> */}
  {/* <PhotographerHomePage/> */}




  <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/PhotographerHomePage" element={<PhotographerHomePage/>} />
          <Route path="/MehendiHomePage" element={<MehendiHomePage/>}/>
          
  </Routes>

      </>
     

}
export default App;
