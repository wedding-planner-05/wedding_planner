import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { TiSocialFacebookCircular } from "react-icons/ti";
import './Navbar.css'


function Navbar() {
  return (
    <div className='container navbar-div'>
      <div className= 'navbar-social-media'>
        <div className='icon'>
        <FaWhatsapp /> 
        <IoLogoInstagram />
        <FaYoutube />
        <TiSocialFacebookCircular />
        </div>
      </div>
      <div className='navbar-header-button'>
            <div className='logo'>
              <img src="images/wedding-planner-high-resolution-logo-white-transparent.png" alt="" />
            </div>
            <div className='button'>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Vendors</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className='signIn-signUp'></div>
      </div>
    </div>
  )
}

export default Navbar