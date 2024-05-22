import React, { useEffect, useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaStar } from "react-icons/fa";
import { FaIndianRupeeSign, FaLocationDot } from "react-icons/fa6";
import "./PhotoVendorDetails.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import ContactUs from "../../Components/ContactUs/ContactUs";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Swal from "sweetalert2";
import { Box, Rating, Typography } from "@mui/material";
import { useAuth0 } from '@auth0/auth0-react';


const PhotoVendorDetails = () => {
  const [products, setProducts] = useState([]);
  const {isAuthenticated, loginWithRedirect} = useAuth0()


  const [showContact,setShowContact ] = useState(false) ;
  const [showEmail,setShowEmail ] = useState(false) ;
  const [value,setValue]  = useState(2)
  const location = useLocation();
  const data = location.state;

  console.log(data);


  const showName = (value)=>{
    console.log(value);
    if(!isAuthenticated){
     Swal.fire({
        title: "Please LogIn First",
        // text: "You won't be able to revert this!",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "  Ok  "
      }).then((result) => {
        if (result.isConfirmed) {
          loginWithRedirect()
        }
      });

    }
    else if(value == 'contact' ){
      if(showContact==true)
        setShowContact(false)
      else{
        setShowContact(isAuthenticated)
        setShowEmail(false)
      }
    }
    else if(value == 'email'){
      if(showEmail==true)
        setShowEmail(false)
      else{
        setShowEmail(isAuthenticated)
        setShowContact(false)
      }
    }
  }

  return <>
    <Navbar />
    <div className="container-fluid">
      {/* <div className="row justify-content-center mt-5 mb-5 pb-5"> */}
      <div className="row justify-content-center mt-5 mb-5 pb-5">

        <div className="col-md-6 col-lg-4 position-relative mb-5">
          <div>
            <img
              className="zoom-img img-fluid"
              src={data.imageUrl}
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
          <div className="custom-label mb-3 p-2" htmlFor="">
            Starting packages
          </div>
          <div className="custom-label mb-3 p-2" htmlFor="">
            <FaIndianRupeeSign />{data.price}
          </div>
          <div className="d-flex justify-content-evenly position-relative">
              <button style={{width:'135px',height:'40px'}} onClick={()=>{showName("contact")}} className=" btn btn-success rounded-5 px-3"><FaPhoneAlt /> Contact</button>
                { showContact &&  <div className='contact-div p-1'>
                  <div className='d-flex gap-3 p-1'>
                  <FaUserAlt /><h6 > {data.title}</h6>
                  </div>
                  <div className='d-flex gap-3 p-1 '>
                  <IoIosCall />
                  <h6>{data.title}</h6>
                  </div>
                  </div>
                }
                <button style={{width:'135px',height:'40px'}} onClick={()=>{showName("email")}} className="btn btn-danger rounded-5 px-3"> <FaEnvelope /> Email</button>
                { (showEmail) &&  <div className='contact-div p-1'>
                  <div className='d-flex gap-3 p-1'>
                  <FaUserAlt /><h6 > {data.type}</h6>
                  </div>
                  <div className='d-flex gap-3 p-1 '>
                  <IoIosCall />
                  <h6>{data.serviceCharge}</h6>
                  </div>
                  </div>
                }
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
