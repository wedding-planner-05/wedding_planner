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

    <div className="vendor-div container mt-5 p-5" id="Services">
        <h3 className="vendor-text">Our Services</h3>
        
   
   <h6 className="vendor-heart" style={{color:"crimson", position:"absolute", left:"200px"}}>_______________<FaHeartPulse/>_______________</h6><br />


<br />


      <h1 style={{ fontSize: "1.2vw", fontFamily:"cursive" }} className="text-center">
        {/* Find trusted wedding services in all Indore area's & Book Verified
        Vendors in simple steps. */}
        Find trusted wedding services in all areas of Indore and book verified vendors in simple steps.
      </h1>

      <div className="vendor-category mt-5" >
        <div
          className="vendor-img d-flex justify-content-center  align-item-center"
          style={{
            width: "300px",
            height: "400px",
          }}
        >
          <img src="/images/vendor1.png" alt="Images not found " />
          <div className="vendor-button text-dark"
            onClick={()=>DressHomePage()}>Wedding Wears
          </div>
        </div>

        <div
          className="vendor-img d-flex justify-content-center align-item-center"
          style={{
            width: "300px",
            height: "400px",
          }}
        >
          <img src="/images/vendor2.png" alt="Images not found " />
          <div className="vendor-button text-dark" onClick={()=>MehendiHomePage()}> Mehendi</div>
        </div>

        <div
          className="vendor-img d-flex justify-content-center align-item-center"
          style={{
            width: "300px",
            height: "400px",
          }}
        >
          <img src="/images/vendor3.png" alt="Images not found " />
          <div className="vendor-button text-dark"onClick={()=>PhotographerHomePage()} >Photographer
          </div>
        </div>

        <div
          className="vendor-img d-flex justify-content-center align-item-center"
          style={{
            width: "300px",
            height: "400px",
          }}
        >
          <img src="/images/vendor4.png" alt="Images not found " />
          <div className="vendor-button text-dark" onClick={()=>SoundHomePage()}>Music / Band</div>
        </div>
        <div
          className="vendor-img d-flex justify-content-center align-item-center"
          style={{
            width: "300px",
            height: "400px",
          }}
        >
          <img src="/images/vendor5.png" alt="Images not found " />
          <div className="vendor-button text-dark" onClick={()=>GardenHomePage()}>Gardens</div>
        </div>
        <div
          className="vendor-img d-flex justify-content-center align-item-center"
          style={{
            width: "300px",
            height: "400px",
          }}
        >
          <img src="/images/vendor6.png" alt="Images not found " />
          <div className="vendor-button text-dark" onClick={()=>CaterHomePage()} >Caters</div>
        </div>
      </div>
    </div>
  );
};

export default Vendors;