import React from 'react'
import { useLocation } from 'react-router-dom'
import "./CaterContactpage.css"
import { FaEnvelope, FaPhoneAlt, FaStar, FaWhatsapp } from 'react-icons/fa';
import { FaIndianRupeeSign, FaLocationDot } from 'react-icons/fa6';
import AboutUs from '../../Components/AboutUs/AboutUs';
import "./CaterContactpage.css"
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuth0 } from '@auth0/auth0-react';
function CaterContactpage() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

    const { state } = useLocation();
    console.log(state, "this is state data");

    const location = useLocation();
    const data = location.state;
    console.log(data);


    const [show, setShow] = React.useState(false);
    const showName = () => {
      if (!isAuthenticated) {
        Swal.fire({
          title: 'Please Sign In First',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Sign In',
          cancelButtonText: 'Cancel'
        }).then((result) => {
          if (result.isConfirmed) {
            loginWithRedirect();
          }
        });
      } else {
        if (show === true) {
          setShow(false);
        } else {
          setShow(isAuthenticated);
        }
      }
    };
    const message ="Hello, I'm interested in your services.And I want to Book a Garden";
    const email = "wedding.planner.techwizards@gmail.com";
    const subject = "Request for Garden Booking";
    const body = `My name is , and I am writing to inquire about the availability of your CCater for an event we are planning.`;
    const url =  `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${email}&su=${subject}&body=${encodeURIComponent(
      body
    )}`;

    return (
        <div>
            {/* <Navbar/> */}
        <div className="container">
  
            <div className="row justify-content-center mt-5 mb-5 pb-5">
      
              <div className="col-md-6 col-lg-4 position-relative mb-5">
                <div>
                  <img
                    className="zoom-img img-fluid"
                    src={state.imageUrl}
                    alt="image not available"
                  />
                </div>
                <div className="position-absolute block-details-1 p-3 mb-4 start-50 top-100 translate-middle">
                  <h5>{state.name}</h5>
                  <small className="mb-5">
                    <FaStar color="green" />{state.rating}
                  </small>
                  <br />
                  <small>
                    <FaLocationDot color="green" />{state.address}
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
                {data.servicecharge}
              </div>
              <div className="d-flex justify-content-evenly position-relative">
                <button
                  onClick={() => {
                    showName();
                  }}
                  className="btn btn-success rounded-5 px-3"
                >
                  <FaPhoneAlt /> Contact
                </button>
                {show && (
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
                >
                  <Link
                    to={url}
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    
                  <FaEnvelope /> Email
                  </Link>
                </button>
              </div>
            </div>

            </div>          
            <div className="container custom-border mt-5 p-5 d-flex flex-wrap">
              <div>{state.description}</div>
      
            </div>
            <AboutUs/>
          </div>
          </div>
        );
}

export default CaterContactpage;

