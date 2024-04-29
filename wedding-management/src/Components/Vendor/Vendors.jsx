import React from "react";
import "./Vendor.css";
import { FaHeartPulse } from "react-icons/fa6";
import {useNavigate} from 'react-router-dom';
const Vendors = () => {
  const navigate = useNavigate();


  const PhotographerHomePage = ()=>{
    navigate('/PhotographerHomePage');
  }
  const MehendiHomePage = ()=>{
    navigate('/MehendiHomePage');
  }
  const SoundHomePage = ()=>{
    navigate("/SoundHomePage")
  }
  const DressHomePage = ()=>{
    navigate("/DressHomePage");
  }
  const GardenHomePage = ()=>{
    navigate("/GardenHomePage");
  }
  const CaterHomePage = ()=>{
    navigate("/caterpage");
  }

  return (

    <div className="vendor-div container mt-5 p-5">
        <h3 className="vendor-text">Vendors Categories</h3>
   <span className="vendor-heart" style={{color:"crimson"}}>______________<FaHeartPulse/>  _______________</span><br />

<br />


      <h2 style={{ fontSize: "1.5vw" }} className="text-center">
        Find trusted wedding services in all Indore area’s & Book Verified
        Vendors in simple steps.
      </h2>

      <div className="vendor-category mt-5" >
        <div
          className="vendor-img d-flex justify-content-center  align-item-center"
          style={{
            width: "300px",
            height: "400px",
          }}
        >
          <img src="/images/vendor1.png" alt="teri " />
          <div className="vendor-button">
            <button onClick={()=>DressHomePage()} className="btn btn-warning text-white">wedding wears</button>
          </div>
        </div>

        <div
          className="vendor-img d-flex justify-content-center align-item-center"
          style={{
            width: "300px",
            height: "400px",
          }}
        >
          <img src="/images/vendor2.png" alt="teri " />
          <div className="vendor-button">
            <button onClick={()=>MehendiHomePage()} className="btn btn-warning text-white">Mehendi</button>
          </div>
        </div>

        <div
          className="vendor-img d-flex justify-content-center align-item-center"
          style={{
            width: "300px",
            height: "400px",
          }}
        >
          <img src="/images/vendor3.png" alt="teri " />
          <div className="vendor-button">
            <button onClick={()=>PhotographerHomePage()} className="btn btn-warning text-white">Photographer</button>
          </div>
        </div>

        <div
          className="vendor-img d-flex justify-content-center align-item-center"
          style={{
            width: "300px",
            height: "400px",
          }}
        >
          <img src="/images/vendor4.png" alt="teri " />
          <div className="vendor-button">
            <button onClick={()=>SoundHomePage()} className="btn btn-warning text-white">Music / Band</button>
          </div>
        </div>
        <div
          className="vendor-img d-flex justify-content-center align-item-center"
          style={{
            width: "300px",
            height: "400px",
          }}
        >
          <img src="/images/vendor5.png" alt="teri " />
          <div className="vendor-button">
            <button onClick={()=>GardenHomePage()} className="btn btn-warning text-white">Gardens</button>
          </div>
        </div>
        <div
          className="vendor-img d-flex justify-content-center align-item-center"
          style={{
            width: "300px",
            height: "400px",
          }}
        >
          <img src="/images/vendor6.png" alt="teri " />
          <div className="vendor-button">
            <button onClick={()=>CaterHomePage()} className="btn btn-warning text-white">Caters</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vendors;
