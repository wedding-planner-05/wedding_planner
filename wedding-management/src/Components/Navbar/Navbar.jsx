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
      {/* <div classNameName='navbar-div'>
      <div classNameName= 'container-fluid navbar-social-media'>
        <div classNameName='icon'>
          <a href=""><FaWhatsapp /> </a>
          <a href=""><IoLogoInstagram /></a>
          <a href=""><FaYoutube /></a>
          <a href=""><TiSocialFacebookCircular /></a>
        </div>
      </div>
      </div> */}

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
    // <a className="navbar-brand" href="#">
    //   {/* navbar */}
    // {/* <img src="images/wedding-planner-high-resolution-logo-white-transparent.png" alt="" /> */}
    // </a>
      // <div classNameName='navbar-div'>
      //   <div classNameName= 'container-fluid navbar-social-media'>
      //     <div classNameName='icon'>
      //       <a href=""><FaWhatsapp /> </a>
      //       <a href=""><IoLogoInstagram /></a>
      //       <a href=""><FaYoutube /></a>
      //       <a href=""><TiSocialFacebookCircular /></a>
      //     </div>
      //   </div>
    //   <div classNameName='navbar-header-button'>
            // <div classNameName='logo'>
            //   <a href="#">
            //   <img src="images/wedding-planner-high-resolution-logo-white-transparent.png" alt="" />
            //   </a>
            // </div>
    //         <div classNameName='button'>
    //             <div><a href="#">Home</a></div>
    //             <div><a href="#">Vendors</a></div>
    //             <div><a href="#">About</a></div>
    //             <div><a href="#">Contact Us</a></div>
             
    //         </div>
          //   <div classNameName='signIn-signUp'>

          //   <span>
          //   <Link to="/vendorSignUp">Are you a vendor ?</Link>
          // </span>
          // <button classNameName="btn btn-danger logIn">Login</button>

          // <div classNameName="vendor-user-option">
          //    <Link to='/userSignIn' classNameName="d-flex align-items-center justify-content-around" style={{width:"100%",height:"50%"}} >
          //     <span><IoMdPerson/></span> <span>Customer</span>
          //     </Link> 
          //     <Link to='/vendorSignIn' classNameName="d-flex align-items-center justify-content-around" style={{width:"100%",height:"50%"}}>
          //     <span><RiAdminFill/></span> <span>Vendor</span>
          // </Link>
          //   </div>
    //   </div>
    //   </div>
    // </div>