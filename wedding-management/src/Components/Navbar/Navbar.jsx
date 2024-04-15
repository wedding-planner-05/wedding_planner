import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { TiSocialFacebookCircular } from "react-icons/ti";
import './Navbar.css'
import { Link } from 'react-router-dom';
import { IoMdPerson } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";

function Navbar() {
  return (
    <div className='navbar-div'>
      <div className= 'container-fluid navbar-social-media'>
        <div className='icon'>
          <a href=""><FaWhatsapp /> </a>
          <a href=""><IoLogoInstagram /></a>
          <a href=""><FaYoutube /></a>
          <a href=""><TiSocialFacebookCircular /></a>
        </div>
      </div>
      <div className='navbar-header-button'>
            <div className='logo'>
              <a href="#">
              <img src="images/wedding-planner-high-resolution-logo-white-transparent.png" alt="" />
              </a>
            </div>
            <div className='button'>
                <div><a href="#">Home</a></div>
                <div><a href="#">Vendors</a></div>
                <div><a href="#">About</a></div>
                <div><a href="#">Contact Us</a></div>
             
            </div>
            <div className='signIn-signUp'>

            <span>
            <Link to="/vendorSignUp">Are you a vendor ?</Link>
          </span>
          <button className="btn btn-danger logIn">Login</button>

          <div className="vendor-user-option">
             <Link to='/userSignIn' className="d-flex align-items-center justify-content-around" style={{width:"100%",height:"50%"}} >
              <span><IoMdPerson/></span> <span>Customer</span>
              </Link> 
              <Link to='/vendorSignIn' className="d-flex align-items-center justify-content-around" style={{width:"100%",height:"50%"}}>
              <span><RiAdminFill/></span> <span>Vendor</span>
          </Link>


            </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar