import React, { useEffect, useState } from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { TiSocialFacebookCircular } from "react-icons/ti";
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { IoMdPerson } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";

function Navbar() {
  const [isSignIn,setLogged] = useState(false)
  const navigate = useNavigate()
  
  useEffect(()=>{
    setLogged(localStorage.getItem('isLogged'))
  },[])

  const signOut = ()=>{
        localStorage.setItem('isLogged',false)
        setLogged('false');
        navigate('/')
      }
  const signIn = ()=>{
        localStorage.setItem('isLogged',null)
        setLogged(null);
        navigate('/userSignIn')
      }
    return (
        <nav style={{height:"12vh"}} className="navbar navbar-expand-lg navbar-light bg-light">
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
      {isSignIn==='false' && <ul className="navbar-nav align-items-center col-md-4 justify-content-end gap-3">
        <li className="nav-item active">
        <a className="nav-link" href="#">
          <Link to="/vendorSignUp"><text style={{textDecoration:"none",color:"black"}}>Vendor LogIn ?</text></Link>
        </a>        
        </li>
        <li className='logIn-button'>
          <button onClick={()=>signIn()} className="btn btn-danger logIn">Login</button>
        </li>
      </ul>}
      {isSignIn==='true' && <ul className="navbar-nav align-items-center col-md-4 justify-content-end gap-3">
        <li className='logIn-button'>
          <button onClick={()=>signOut()} className="btn btn-danger logIn">SignOut</button>      
        </li>
      </ul>}
    </div>

      
  </nav>
  )
}

export default Navbar