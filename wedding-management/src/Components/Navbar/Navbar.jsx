import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useAuth0 } from "@auth0/auth0-react";
import { FaRegUser } from "react-icons/fa";
function Navbar() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const [isLogIn, setIsLogIn] = useState(sessionStorage.getItem("isLoggedIn"));
  const navigate = useLocation();
  const naviagation = useNavigate()
  const VendorLogOut = () => {
    sessionStorage.clear();
    setIsLogIn(null);
    naviagation("/");
  };

  const viewProfile = (type)=>{
     switch(type){
     case "cater":
      naviagation("/CaterHomeDetailsDashBoard")
      break;
     case "garden":
      naviagation("/GardenHomeDetailsDashBoard")
      break;
     case "dress":
      naviagation("/DressHomeDetailsDashBoard")
      break;
     case "sound":
      naviagation("/SoundHomeDetailsDashBoard")
      break;
     }
  }

  let caterTypes = sessionStorage.getItem("caterType");

  return (
    <div style={{ paddingTop: "3%" }} className="">
      <nav
        style={{
          height: "12vh",
          width: "100%",
          zIndex: "4",
        }}
        className="navbar fixed-top navbar-expand-lg navbar-light bg-light"
      >
        {/* Logo and toggle button */}
        <div className="logo col-6 col-md-3 col-lg-2">
          <a href="/">
            <img
              src="images/wedding-planner-high-resolution-logo-white-transparent.png"
              alt=""
            />
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation links */}
        <div
          className="collapse navbar-collapse col-md-5 col-lg-6"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav align-align-items-center col-md-8 justify-content-center gap-5">
            <li className="nav-item active">
              <HashLink className="nav-link" smooth to="#home">
                Home <span className="sr-only">(current)</span>
              </HashLink>
            </li>
            <li className="nav-item active">
              <HashLink className="nav-link" smooth to="#Services">
                Services
              </HashLink>
            </li>
            <li className="nav-item active">
              <HashLink className="nav-link" smooth to="#Contactus">
                Contact
              </HashLink>
            </li>
            <li className="nav-item active">
              <HashLink className="nav-link " smooth to="#AboutUs">
                About Us
              </HashLink>
            </li>
          </ul>
        </div>

        {/* User profile and authentication buttons */}
        <div className="navbar-nav align-items-center col-md-4 align-content-between justify-content-end gap-3 border">
          {isAuthenticated && (
            <div>
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50px",
                  marginRight: "1rem",
                }}
                src={user.picture}
                alt=""
              />
            </div>
          )}

          {isAuthenticated ? (
            <div>
              <button
                className="logIn-logOut"
                style={{
                  backgroundColor: "crimson",
                  height: "40px",
                  width: "90px",
                  borderRadius: "10px",
                  border: "none",
                  color: "white",
                }}
                onClick={() =>
                  logout({
                    logoutParams: { returnTo: window.location.origin },
                  })
                }
              >
                Log Out
              </button>
            </div>
          ) : isLogIn ? (
              <div className="dropdown vendor-logout-button">
                <button style={{backgroundColor:'crimson'}} className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <FaRegUser/>
                </button>
                    <ul className="dropdown-menu" style = {{marginLeft:"-2.5rem", width:"100px",height:'100px' ,padding:'10px'}}>
                      <li className="border border-dark mb-2"><button onClick={()=>viewProfile(sessionStorage.getItem("caterType"))} className="dropdown-item m-0" href="#">View profile</button></li>
                      <li className="mt-0 border border-dark mb-0" onClick={()=>VendorLogOut()}><button  className="dropdown-item " href="#">Log Out</button></li>
                    </ul>
              </div>
          ) : (
            <div
              className="d-flex justify-content-between"
              style={{ width: "250px" }}
            >
              <div className="nav-item active">
                <a className="nav-link" href="#">
                  <Link to="/vendorSignIn">
                    <span style={{ textDecoration: "none", color: "black" }}>
                      Vendor LogIn ?
                    </span>
                  </Link>
                </a>
              </div>

              <div className="logIn-button">
                <button
                  className="logIn-logOut"
                  style={{
                    backgroundColor: "crimson",
                    height: "40px",
                    width: "90px",
                    borderRadius: "10px",
                    border: "none",
                    color: "white",
                  }}
                  onClick={() => loginWithRedirect()}
                >
                  Log In
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
