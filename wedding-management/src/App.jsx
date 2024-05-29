
import "./App.css";
import Home from "./Home-Page/Home.jsx";
import React, { useEffect, useState } from 'react';
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
import CaterPage from "./VendorsPages/Cater/CaterPage.jsx";
import CaterContactpage from "./VendorsPages/Cater/CaterContactpage.jsx";
import Auth from "../Auth/Auth.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import CaterHomeDetailsDashBoard from "./DashBord/caterDashboard/CaterHomeDetailsDashBoard.jsx";
import CaterResetPassDashBoard from "./DashBord/caterDashboard/CaterResetPassDashBoard.jsx";
import CaterContactDash from "./DashBord/caterDashboard/CaterContactDash.jsx";
import DressHomeDetailsDashBoard from "./DashBord/DressDashBoard/DressHomeDetailsDashBoard.jsx";
import DressResetPassDashBoard from "./DashBord/DressDashBoard/DressResetPassDashBoard.jsx";
import SoundHomeDetailsDashBoard from "./DashBord/SoundDashBoard/SoundHomeDetailsDashBoard.jsx";
import SoundResetPassDashBoard from "./DashBord/SoundDashBoard/SoundResetPassDashBoard.jsx";
import GardenContactDashBoard from "./DashBord/Garden/GardenContactDashBoard.jsx";
import GardenHomeDetailsDashBoard from "./DashBord/Garden/GardenHomeDetailsDashBoard.jsx";
import GardenResetPassDashBoard from "./DashBord/Garden/GardenResetPassDashBoard.jsx";
import DressContactDashBoard from "./DashBord/DressDashBoard/DressContactDashBoard.jsx";
import SoundContactDashBoard from "./DashBord/SoundDashBoard/SoundContactDashBoard.jsx";
import ForgetPassword from "./SignIn&SignUP/ForgorPassword/ForgotPassword.jsx";
import ResetPassword from "./SignIn&SignUP/ResetPassword/ResetPassword.jsx";
import DressDetailPage from "./VendorsPages/Dress/DressDetailPage.jsx";
import Loader from "./Components/LoaderComponent/Loader.jsx";
import axios from "axios";
import GardenDetailPage from "./VendorsPages/Garden/GardenDetailPage.jsx";
import CaterProfile from "./DashBord/caterDashboard/CaterProfile.jsx";
import DressProfile from "./DashBord/DressDashBoard/DressProfile.jsx";
import SoundProfile from "./DashBord/SoundDashBoard/SoundProfile.jsx";
import GardenProfile from "./DashBord/Garden/GardenProfile.jsx";
import Vendors from "./Components/Vendor/Vendors.jsx";
import RatingReview from "./Components/Rating/RatingReview.jsx";




const App = () => {
      const [loading, setLoading] = useState(false)

      useEffect(() => {
            axios.interceptors.request.use((config) => {
                  setLoading(true)
                  return config
            }, (error) => {
                  return Promise.reject(error)
            })
            axios.interceptors.response.use((config) => {
                  setLoading(false)
                  return config
            }, (error) => {
                  return Promise.reject(error)
            })
      }, [])


      return <>
            <Navbar />
            {/* <Loader show={loading}/> */}
            <Routes>
                  <Route path="/userSignIn" element={<UserSignIn />} />
                  <Route path="/vendorSignIn" element={<VendorSignIn />} />
                  <Route path="/vendorSignUp" element={<SignupVendor />} />
                  <Route path="/forgotPassword" element={<ForgetPassword />} />
                  <Route path="/resetPassword" element={<ResetPassword />} />
                  <Route path="/RatingReview" element={<RatingReview/>}/>      
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<Vendors />} />
                  <Route path="/otpVerify" element={<UserOtp />} />
                  <Route path="/DressHomePage" element={<DressHomePage />} />
                  <Route path='/DressDetailPage' element={<DressDetailPage />} />
                  <Route path="/PhotographerHomePage" element={<PhotographerHomePage />} />
                  <Route path="/PhotoVendorDetails" element={<PhotoVendorDetails />} />
                  <Route path="/MehendiHomePage" element={<MehendiHomePage />} />
                  <Route path="/SoundHomePage" element={<SoundHomePage />} />
                  <Route path="/SoundVendorDetails" element={<SoundVendorDetails />} />
                  <Route path='/GardenHomePage' element={<GardenHomePage />} />
                  <Route path='/GardenVendorDetails' element={<GardenDetailPage />} />
                  <Route path="/caterpage" element={<CaterPage />} />
                  <Route path="/CaterContactpage" element={<CaterContactpage />} />
                  <Route path="/vendorSignIn" elementm={<VendorSignIn />} />

                  {/* ----------------------------------------------CATER DASHBOARD--------------------------------------------- */}

                  <Route path="/CaterHomeDetailsDashBoard" element={<CaterHomeDetailsDashBoard />} />
                  <Route path="/CaterResetPassDashBoard" element={<CaterResetPassDashBoard />} />
                  <Route path="/CaterContactDash" element={<CaterContactDash />} />
                  <Route path="/CaterProfile" element={<CaterProfile />} />

                  {/* ----------------------------------------------DRESS DASHBOARD--------------------------------------------- */}

                  <Route path="/DressHomeDetailsDashBoard" element={<DressHomeDetailsDashBoard />} />
                  <Route path="/DressResetPassDashBoard" element={<DressResetPassDashBoard />} />
                  <Route path="/DressContactDashBoard" element={<DressContactDashBoard />} />
                  <Route path="/DressProfile" element={<DressProfile />} />

                  {/* ----------------------------------------------SOUND DASHBOARD--------------------------------------------- */}

                  <Route path="/SoundHomeDetailsDashBoard" element={<SoundHomeDetailsDashBoard />} />
                  <Route path="/SoundResetPassDashBoard" element={<SoundResetPassDashBoard />} />
                  <Route path="/SoundContactDashBoard" element={<SoundContactDashBoard />} />
                  <Route path="/SoundProfile" element={<SoundProfile />} />

                  {/* ----------------------------------------------GARDEN DASHBOARD--------------------------------------------- */}
                  <Route path="/GardenHomeDetailsDashBoard" element={<GardenHomeDetailsDashBoard />} />
                  <Route path="/GardenResetPassDashBoard" element={<GardenResetPassDashBoard />} />
                  <Route path="/GardenContactDashBoard" element={<GardenContactDashBoard />} />
                  <Route path="/GardenProfile" element={<GardenProfile />} />



            </Routes>


      </>

}
export default App;
