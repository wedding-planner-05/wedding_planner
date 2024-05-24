import React from "react";
import "./ContactUs.css";
import { FaHeartPulse } from "react-icons/fa6";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaPhoneAlt,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="container-fluid mt-5 p-0" id="Contactus">
      {/* Contact Information Section */}
      <div className="text-center m-4 ">
        <h2 style={{ color: "crimson" }}>Contact us</h2>
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
      <section className="container mb-5">
        <div className="row contact-main p-3">

          {/* Contact Information Left Section */}
          <div className="col-lg-12 col-md-12 p-3 d-flex flex-column justify-content-evenly align-items-center border-1 rounded-3" style={{backgroundColor:'crimson',color:'white'}}>
            <h4 className="mb-4">Contact Information</h4>
            <div className="d-flex flex-column justify-content-evenly text-size-s row-gap-4">
              <span className="" style={{fontSize:'19px'}}>
                <FaPhoneAlt size={'23px'}/>  +91 7354560597
              </span>
              <span className="" style={{fontSize:'19px'}}>
              <FaEnvelope size={'23px'}/>  wedding.planner.techwizards@gmail.com
              </span>
              <span className="" style={{fontSize:'19px'}}>
              <FaMapMarkerAlt size={'23px'}/> InfoTech Designer Company, C21 Mall, Vijay Nagar Square, Indore
              </span>

              <div className="socialiconbox">
                <ul style={{width:'90%'}} className="socialicon d-flex justify-content-between px-2 h6">
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

          {/* <div className="col-lg-12 col-md-6"> 

            <div className="row m-3">
              <div className="col-sm-6">
                <div className="form-group text-size-s">
                  <label htmlFor="firstName" style={{width: '100%'}}>First Name</label> 
                  <input
                    className="form-control rounded-0 custom-input-w"
                    type="text"
                    id="firstName"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group text-size-s">
                  <label htmlFor="lastName" style={{width: '100%'}}>Last Name</label> 
                  <input
                    className="form-control rounded-0 custom-input-w custom-input-w"
                    type="text"
                    id="LastName"
                  />
                </div>
              </div>
            </div>

            <div className="row m-3">
              <div className="col-sm-6">
                <div className="form-group text-size-s">
                  <label htmlFor="email" style={{width: '100%'}}>Email</label> 
                  <input
                    className="form-control rounded-0 custom-input-w"
                    type="email"
                    id="email"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group text-size-s">
                  <label htmlFor="phone" style={{width: '100%'}}>Phone Number</label> 
                  <input
                    className="form-control rounded-0 custom-input-w"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>
            </div>

            <div className="m-4">
              <h6 className="text-dark">Select Subjects</h6>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inquiryType"
                  id="inlineRadio1"
                />
                <label
                  className="form-check-label text-size-s"
                  htmlFor="inlineRadio1"
                >
                  General Inquiry
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inquiryType"
                  id="inlineRadio2"
                />
                <label
                  className="form-check-label text-size-s"
                  htmlFor="inlineRadio2"
                >
                  Other Inquiry
                </label>
              </div>
            </div>

            <div>
              <h6 className="text-size-s m-4">Message</h6>
              <div className="form-check form-check-inline">
                <textarea
                  className="form-control rounded-0 custom-input-w text-size-s"
                  rows="4"
                  cols="100"
                  placeholder="Write your message..."
                ></textarea>
              </div>
            </div>

            <div className="text-end p-4 pe-0">
              <button className="btn text-white" style={{ backgroundColor: "crimson" }}>
                Send Message
              </button>
            </div>
          </div> */}
          
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
