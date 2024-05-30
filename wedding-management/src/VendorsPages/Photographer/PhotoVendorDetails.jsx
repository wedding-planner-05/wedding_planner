import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaStar, FaWhatsapp } from "react-icons/fa";
import { FaIndianRupeeSign, FaLocationDot } from "react-icons/fa6";
import "./PhotoVendorDetails.css";
import { useLocation } from "react-router-dom";
import ContactUs from "../../Components/ContactUs/ContactUs";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Swal from "sweetalert2";
import { Box, Rating, Typography } from "@mui/material";
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from "react-router-dom";


const PhotoVendorDetails = () => {
  // const [products, setProducts] = useState([]);

  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const location = useLocation();
  const data = location.state;
  console.log(data);

  const [showContact, setShowContact] = React.useState(false);

  const [showEmail, setShowEmail] = React.useState(false);

  const [value, setValue] = React.useState(2);

  console.log(value);

  // const [show, setShow] = React.useState(false);

  const showName = (value) => {
    console.log(value);
    if (!isAuthenticated) {
      Swal.fire({
        title: "Please LogIn First",
        // text: "You won't be able to revert this!",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "  Ok  ",
      }).then((result) => {
        if (result.isConfirmed) {
          loginWithRedirect();
        }
      });
    } else if (value == "contact") {
      if (showContact == true) setShowContact(false);
      else {
        setShowContact(isAuthenticated);
        setShowEmail(false);
      }
    } else if (value == "email") {
      if (showEmail == true) setShowEmail(false);
      else {
        setShowEmail(isAuthenticated);
        setShowContact(false);
      }
    }
  };

  const message =
    "Hello, I'm interested in your services.And I want to Book a Garden";

  const email = "wedding.planner.techwizards@gmail.com";
  const subject = "Request for Garden Booking";
  const body = `My name is , and I am writing to inquire about the availability of your Sound/DJ for an event we are planning.`;
 
  const url = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${email}&su=${subject}&body=${encodeURIComponent(
    body
  )}`;

  return <>
    <Navbar />
    <div className="container-fluid">
      {/* <div className="row justify-content-center mt-5 mb-5 pb-5"> */}
      <div className="row justify-content-center mt-5 mb-5 pb-5">

        <div className="col-md-6 col-lg-4 position-relative mb-5">
          <div>
            <img
              className="zoom-img img-fluid"
              // src={data.imageUrl}
              src={
                data.imageUrl.startsWith("images") ?  `http://localhost:3005/` + data.imageUrl : data.imageUrl
               } 
              alt="image not available"
            />
          </div>
          <div className="position-absolute block-details-1 p-3 mb-4 start-50 top-100 translate-middle">
            <h5>{data.title}</h5>
            <small className="mb-5">
              <FaStar color="green" />{data.rating}
            </small>
            <br />
            <small>
              <FaLocationDot color="green" />{data.address}
            </small>{" "}
            <br />
          </div>
        </div>




        <div className="col-md-6 col-lg-5 d-flex flex-column custom-label-size mt-4">
              <div className="custom-label mb-3 p-2 " htmlFor="">
                Starting packages
              </div>
              <div className="custom-label mb-3 p-2" htmlFor="">
                <FaIndianRupeeSign />
                {data.price}
              </div>
              <div className="d-flex justify-content-evenly position-relative">
                <button
                  onClick={() => {
                    showName("contact");
                  }}
                  className="btn btn-success rounded-5 px-3"
                >
                  <FaPhoneAlt /> Contact
                </button>
                {showContact && (
                  <div className="contact-div p-1">
                    <ul className="d-flex flex gap-2 p-1">
                      <li>
                        <FaPhoneAlt color="blue" />{" "}
                        <strong>
                          <Link
                            style={{ textDecoration: "none" }}
                            to={"tel:+91 93023 18373"}
                          >
                            {data.contactNo}
                          </Link>
                        </strong>
                      </li>
                      <li>
                        <strong>
                          <Link
                            to={`https://wa.me/91${
                              data && data.contactNo
                            }?text=${encodeURIComponent(message || "Hi...")}`}
                            target="_blank"
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            {" "}
                            <FaWhatsapp color="green" />{" "}
                            {data && data.contactNo}{" "}
                          </Link>
                        </strong>
                      </li>
                    </ul>

                    <div className="d-flex gap-3 p-1 ">
                      {/* <IoIosCall /> */}
                    </div>
                  </div>
                )}

                <button
                  // style={{ width: "135px", height: "40px" }}
                  className="btn btn-danger rounded-5 px-4 "
                  onClick={() => {
                    showName("email");
                  }}
                >
                  {isAuthenticated ? (
                    <>
                      <Link
                        to={url}
                        target="_blank"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <FaEnvelope /> Email
                      </Link>
                    </>
                  ) : (
                    <>
                      <FaEnvelope /> Email
                    </>
                  )}
                </button>
              </div>
            </div>

      </div>
      <div className="container custom-border mt-5 p-5 d-flex flex-wrap">
            <div>{data.description}</div>
            <Box>
        <Typography component='legend'></Typography>
        <Rating name='simple-controlled' value={value} onChange={(event , newValue)=>setValue(newValue)} />
    </Box>
    
          </div>
    </div>
    <ContactUs />
    <Footer />
  </>
};

export default PhotoVendorDetails;
