
import React from 'react'
import Home from './Home-Page/Home'

const App = () => {
  return<>
<Home/>
</>  

import "./App.css";
import "./Components/Footer.css"
import "./SignupVendor/SignupVendor.css"
import Footer from "./Components/Footer";
import Home from "./Home-Page/Home";
import SignupVendor from "./SignupVendor/SignupVendor";

function App() {
  return (
    <>
      {/* <Home />
      <Footer/> */}

      <SignupVendor/>
    </>
  );
}

export default App;
