
import "./App.css";
import "./CaterVendor/CaterPage.css"
import CaterPage from "./CaterVendor/CaterPage";
import Footer from "./Components/Footer";
import "./Components/Footer.css"
import Home from "./Home-Page/Home";
import SignupVendor from "./SignupVendor/SignupVendor";

import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
      {/* <Home/> */}
      {/* <SignupVendor/> */}
      {/* <Footer/> */}
      <CaterPage/>

      
    </>
  );
}
export default App;
