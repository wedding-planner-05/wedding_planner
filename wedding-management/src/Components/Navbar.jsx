import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { TiSocialFacebookCircular } from "react-icons/ti";
import './Navbar.css'


function Navbar() {
  return (
    <div className='container-fluid navbar-div'>
      <div className= 'navbar-social-media'>
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
              <span><a href="#">Are you a vendor ?</a></span>
              <button className='btn btn-danger'>Login</button>
            </div>
      </div>
    </div>
  )
}

export default Navbar