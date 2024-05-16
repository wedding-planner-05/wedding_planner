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
        <h3 className="vendor-text">Vendors Categories</h3>
   
   {/* <h3 className="vendor-heart" style={{color:"crimson"}}>_______________<FaHeartPulse/>_______________</h3><br /> */}


<br />


      <h2 style={{ fontSize: "1.5vw" }} className="text-center">
        Find trusted wedding services in all Indore area's & Book Verified
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
          <div className="vendor-button text-white"
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
          <img src="/images/vendor2.png" alt="teri " />
          <div className="vendor-button text-white" onClick={()=>MehendiHomePage()}> Mehendi</div>
        </div>

        <div
          className="vendor-img d-flex justify-content-center align-item-center"
          style={{
            width: "300px",
            height: "400px",
          }}
        >
          <img src="/images/vendor3.png" alt="teri " />
          <div className="vendor-button text-white"onClick={()=>PhotographerHomePage()} >Photographer
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
          <div className="vendor-button text-white" onClick={()=>SoundHomePage()}>Music / Band</div>
        </div>
        <div
          className="vendor-img d-flex justify-content-center align-item-center"
          style={{
            width: "300px",
            height: "400px",
          }}
        >
          <img src="/images/vendor5.png" alt="teri " />
          <div className="vendor-button text-white" onClick={()=>GardenHomePage()}>Gardens</div>
        </div>
        <div
          className="vendor-img d-flex justify-content-center align-item-center"
          style={{
            width: "300px",
            height: "400px",
          }}
        >
          <img src="/images/vendor6.png" alt="teri " />
          <div className="vendor-button text-white" onClick={()=>CaterHomePage()} >Caters</div>
        </div>
      </div>
    </div>
  );
};

export default Vendors;