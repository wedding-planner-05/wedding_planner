import React from "react";
import { FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-light mt-5">
      <div className="container-fluid p-2">
        <div className="row justify-content-around m-4">
          <div className="col-md-4">
            <div className="text-center">
              <img
                className="img-fluid"
                width={"25%"}
                src="images/logo.png"
                alt=""
              />
            </div>
            <p>
              "Welcome to Wedding planning, where we turn your wedding dreams
              into reality. From venue selection to guest management, we're here
              to guide you every step of the way. Let's make your special day
              truly unforgettable."
            </p>
          </div>
          <div className="col-md-2">
            <h6>Start Planning</h6>
            <ul className="list-unstyled">
              <li>
                <a className="no-decoration" href="#">
                  Search by Vendor
                </a>
              </li>
              <li>
                <a className="no-decoration" href="#">
                  Search by City
                </a>
              </li>
              <li>
                <a className="no-decoration" href="#">
                  Download Our App
                </a>
              </li>
              <li>
                <a className="no-decoration" href="#">
                  Top Rates vendors
                </a>
              </li>
              <li>
                <a className="no-decoration" href="#">
                  Destination Wedding
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6>Wedding Ideas</h6>
            <ul className="list-unstyled">
              <li>
                <a className="no-decoration" href="#">
                  Wedding Blog
                </a>
              </li>
              <li>
                <a className="no-decoration" href="#">
                  Wedding Gallery
                </a>
              </li>
              <li>
                <a className="no-decoration" href="#">
                  Real Wedding
                </a>
              </li>
              <li>
                <a className="no-decoration" href="#">
                  Submit Wedding
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6>Home</h6>
            <ul className="list-unstyled">
              <li>
                <a className="no-decoration" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="no-decoration" href="#">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="no-decoration" href="#">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a className="no-decoration" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="no-decoration" href="#">
                  Cancellation Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6>Services</h6>
            <ul className="list-unstyled">
              <li>
                <a className="no-decoration" href="#">
                  Heena Artist
                </a>
              </li>
              <li>
                <a className="no-decoration" href="#">
                  Bridal Dress
                </a>
              </li>
              <li>
                <a className="no-decoration" href="#">
                  Groom Dress
                </a>
              </li>
              <li>
                <a className="no-decoration" href="#">
                  Music & Dance
                </a>
              </li>
              <li>
                <a className="no-decoration" href="#">
                  Photographers
                </a>
              </li>
              <li>
                <a className="no-decoration" href="#">
                  Catering Services
                </a>
              </li>
              <li>
                <a className="no-decoration" href="#">
                  Makeup Artist
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="row d-flex align-items-center py-2"
          style={{ backgroundColor: "crimson", color: "white" }}
        >
          <div className="col-md-auto">
            <span className="d-flex align-items-center ps-2">
              <FaEnvelope className="mr-2" />{" "}
              <a
                className="no-decoration ps-3"
                href="mailto:wedding.planner.techwizards@gmail.com"
              >
                {" "}
                wedding.planner.techwizards@gmail.com
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
