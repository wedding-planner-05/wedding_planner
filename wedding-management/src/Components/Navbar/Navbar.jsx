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
  return <>
    <nav style={{height:"12vh", borderBottom:"2px solid crimson"}} className="navbar navbar-expand-lg navbar-light bg-light">
        <div className='logo col-6 col-md-3 col-lg-2'>
              <a href="#">
              <img src="images/wedding-planner-high-resolution-logo-white-transparent.png" alt="" />
              </a>
        </div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse col-md-9 col-lg-10" id="navbarNavDropdown">
      <ul className="navbar-nav align-items-center col-md-8 justify-content-center gap-5">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link " href="#">
            Dropdown link
          </a>
        </li>
      </ul>
      <ul className="navbar-nav align-items-center col-md-4 justify-content-end gap-3">
        <li className="nav-item active">
        <a className="nav-link" href="#">
          <Link to="/vendorSignUp"><text style={{textDecoration:"none",color:"black"}}>Vendor LogIn ?</text></Link>
        </a>        
        </li>
        <li className='logIn-button'>
          <Link to='/userSignIn' ><button className="btn btn-danger logIn">Login</button></Link>       
        </li>
      </ul>
    </div>

      
  </nav>

  </>
}

export default Navbar
