import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { user, loginWithRedirect, isAuthenticated, isLoading, logout } =
    useAuth0();

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
        <div onClick={() => home()} className="logo col-6 col-md-3 col-lg-2">
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
        <div
          className="collapse navbar-collapse col-md-5 col-lg-10"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav align-items-center col-md-8 justify-content-center gap-5">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link " href="#">
                About Us
              </a>
            </li>
          </ul>

          <div
            style={{}}
            className="navbar-nav align-items-center col-md-4 align-content-between justify-content-end gap-3"
          >
            {!isAuthenticated && (
              <div className="nav-item active">
                <a className="nav-link" href="#">
                  <Link to="/vendorSignIn">
                    <text style={{ textDecoration: "none", color: "black" }}>
                      Vendor LogIn ?
                    </text>
                  </Link>
                </a>
              </div>
            )}
            <div className="">
              {isAuthenticated && (
                <span>
                  {user.nickname}
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50px",
                    }}
                    src={user.picture}
                    alt=""
                  />
                </span>
              )}
            </div>
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
            ) : (
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
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
{
  /* { <ul className="navbar-nav align-items-center col-md-4 justify-content-end gap-3">
        <li className='logIn-button'>
          <button onClick={()=>signOut()} className="btn btn-danger logIn">SignOut</button>      
          </li>
      </ul>} */
}
