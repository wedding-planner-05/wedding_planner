import React from "react";
import "../../App.css";
import "./ContactUs.css";
import { FaHeartPulse } from "react-icons/fa6";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaPhoneAlt,
} from "react-icons/fa";

//
const ContactUs = () => {
  return (
    <div className="container-fluid p-0 contact-us">
      {/* Header Section */}
      {/* <div className="header-line"></div> */}

      {/* Contact Information Section */}
      <div className="text-center m-4">
        <h5 style={{ color: "crimson" }}>Contact us</h5>
        <span className="custom-icons" style={{ color: "crimson" }}>
          ___________
          <FaHeartPulse />
          ___________
        </span>
        <h6 className="custom-h6 mt-3">
          Any question or remarks? Just write us a message!
        </h6>
      </div>

      {/* Main Content Section */}
      <section className="container-fluid d-flex justify-content-center align-content-center mb-4">
        <div className="row container-fluid contact-main p-3">
          {/* Contact Information Left Section */}
          <div className="contact-main-left col-2 col-lg-8 col-md-12 p-3 d-flex flex-column justify-content-evenly align-items-start">
            <h4>Contact Information</h4>
            <div className="d-flex flex-column justify-content-evenly text-smaller row-gap-3">
              <span className="">
                <FaPhoneAlt /> +91 7354560590
              </span>
              <span className="">
                <FaMapMarkerAlt /> wedding.planner.techwizards@gmail.com
              </span>
              <span className="">
                <FaEnvelope /> C21 Mall, Vijay Nagar Square, Indore
              </span>

              <div className="socialiconbox">
                <ul className="socialicon d-flex justify-content-between px-2">
                  <li>
                    <i className="bx bxl-instagram"></i>
                  </li>
                  <li>
                    <i className="bx bxl-facebook"></i>
                  </li>
                  <li>
                    <i className="bx bxl-github"></i>
                  </li>
                  <li>
                    <i className="bx bxl-youtube"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form Right Section */}
          <div className="contact-main-right col-2 col-lg-4 col-md-12">
            {/* Form Fields */}
            <div className="row m-3">
              <div className="col-sm-6">
                <div className="form-group text-size-s">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    className="custom-vw-vh form-control border-0 border-bottom border-3 rounded-0"
                    type="text"
                    id="firstName"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group text-size-s">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    className="custom-vw-vh form-control border-0 border-bottom border-3 rounded-0"
                    type="text"
                    id="LastName"
                  />
                </div>
              </div>
            </div>

            {/* Email and Phone Number Fields */}
            <div className="row m-3">
              <div className="col-sm-6">
                <div className="form-group text-size-s">
                  <label htmlFor="email">Email</label>
                  <input
                    className="custom-vw-vh form-control border-0 border-bottom form-control border-3 rounded-0"
                    type="email"
                    id="email"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group text-size-s">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    className="custom-vw-vh form-control border-0 border-bottom border-3 rounded-0"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>
            </div>

            {/* Select Subjects Section */}
            <div className="m-4">
              <h6 className="text-dark">Select Subjects</h6>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input text-center border border-black"
                  type="radio"
                  name="inquiryType"
                  id="inlineRadio1"
                />
                <label
                  className="form-check-label text-smaller"
                  htmlFor="inlineRadio1"
                >
                  General Inquiry
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input border border-black"
                  type="radio"
                  name="inquiryType"
                  id="inlineRadio2"
                />
                <label
                  className="form-check-label text-smaller"
                  htmlFor="inlineRadio2"
                >
                  Other Inquiry
                </label>
              </div>
            </div>

            {/* Message Section */}
            <div>
              <h6 className="text-smaller m-4">Message</h6>
              <div className="form-check form-check-inline">
                <textarea
                  className="form-control border border-black text-smaller"
                  rows="4"
                  cols="100"
                  placeholder="Write your message..."
                ></textarea>
              </div>
            </div>

            {/* Send Button */}
            <div className="text-end p-4 pe-0">
              <button
                className="btn text-white"
                style={{ backgroundColor: "crimson" }}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;