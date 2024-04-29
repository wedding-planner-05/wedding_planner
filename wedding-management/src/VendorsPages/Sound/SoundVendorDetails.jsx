import React, { useContext, useState } from 'react'
import { FaEnvelope, FaPhoneAlt, FaStar } from 'react-icons/fa';
import { FaIndianRupeeSign, FaLocationDot } from 'react-icons/fa6';
import { useLocation } from 'react-router-dom';
import AboutUs from '../../Components/AboutUs/AboutUs';
import Navbar from '../../Components/Navbar/Navbar';
import "./SoundVendorDetails.css"


const SoundVendorDetails = () => {
    const location = useLocation()
    const data = location.state
    console.log(data);

    const [show,setShow ] = useState(false)

    const showName = ()=>{
        if(show==true)
            setShow(false)
          else
            setShow(true)
          
        }
      
    return (
        <div className="container-fluid">
            <Navbar/>
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
                <h5>{data.name}</h5>
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
                <FaIndianRupeeSign />{data.serviceCharge}
              </div>
              <div className="d-flex justify-content-around position-relative">
                <button onClick={()=>{showName()}} className="btn btn-success rounded-5 px-5"><FaPhoneAlt /> Contact</button>
                { show &&  <div className='contact-div' style={{position:"absolute",top:"120%",left:"0"}}>
                  </div>
                }
                <button className="btn btn-danger rounded-5 px-5">
                  <FaEnvelope /> Email
                </button>
              </div>
            </div>
          </div>          
          <div className="container custom-border mt-5 p-5 d-flex flex-wrap">
            <div>{data.description}</div>
    
          </div>
          <AboutUs/>
        </div>
      );
}

export default SoundVendorDetails
