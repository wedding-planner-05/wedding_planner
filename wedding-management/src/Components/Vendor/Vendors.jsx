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

//     <div className="vendor-div container mt-5 p-5">
//         <h3 className="vendor-text">Vendors Categories</h3>
//    {/* <span className="vendor-heart" style={{color:"crimson"}}>______________<FaHeartPulse/>  _______________</span><br /> */}

// <br />


//       <h2 style={{ fontSize: "1.5vw" }} className="text-center">
//         Find trusted wedding services in all Indore area’s & Book Verified
//         Vendors in simple steps.
//       </h2>

//       <div className="vendor-category mt-5" >
//         <div
//           className="vendor-img d-flex justify-content-center  align-item-center"
//           // style={{
//           //   width: "300px",
//           //   height: "400px",
//           // }}
//         >
//           <img src="/images/vendor1.png" alt="teri " />
//           <div className="vendor-button">
//             <button onClick={()=>DressHomePage()} className="btn text-black">wedding wears</button>
//           </div>
//         </div>

//         <div
//           className="vendor-img d-flex justify-content-center align-item-center"
//           // style={{
//           //   width: "300px",
//           //   height: "400px",
//           // }}
//         >
//           <img src="/images/vendor2.png" alt="teri " />
//           <div className="vendor-button">
//             <button onClick={()=>MehendiHomePage()} className="btn text-black">Mehendi</button>
//           </div>
//         </div>

//         <div
//           className="vendor-img d-flex justify-content-center align-item-center"
//           // style={{
//           //   width: "300px",
//           //   height: "400px",
//           // }}
//         >
//           <img src="/images/vendor3.png" alt="teri " />
//           <div className="vendor-button">
//             <button onClick={()=>PhotographerHomePage()} className="btn text-black">Photographer</button>
//           </div>
//         </div>

//         <div
//           className="vendor-img d-flex justify-content-center align-item-center"
//           // style={{
//           //   width: "300px",
//           //   height: "400px",
//           // }}
//         >
//           <img src="/images/vendor4.png" alt="teri " />
//           <div className="vendor-button">
//             <button onClick={()=>SoundHomePage()} className="btn text-black">Music / Band</button>
//           </div>
//         </div>
//         <div
//           className="vendor-img d-flex justify-content-center align-item-center"
//           // style={{
//           //   width: "300px",
//           //   height: "400px",
//           // }}
//         >
//           <img src="/images/vendor5.png" alt="teri " />
//           <div className="vendor-button">
//             <button onClick={()=>GardenHomePage()} className="btn text-black">Gardens</button>
//           </div>
//         </div>
//         <div
//           className="vendor-img d-flex justify-content-center align-item-center"
//           // style={{
//           //   width: "300px",
//           //   height: "400px",
//           // }}
//         >
//           <img src="/images/vendor6.png" alt="teri " />
//           <div className="vendor-button">
//             <button onClick={()=>CaterHomePage()} className="btn text-black">Caters</button>
//           </div>
//         </div>
//       </div>
//     </div>
<div className="vendor-div container mt-5 p-5">
<h3 className="vendor-text text-center">Vendors Categories</h3>
<div className="vendor-category mt-5" >
<div class="box-item">
<div class="flip-box">
  <div class="flip-box-front text-center" style={{backgroundImage: "url('/images/vendor1.png')"}}>
    <div class="inner color-white">
      <h3 class="flip-box-header">Custom Domains</h3>
      <p>A short sentence describing this callout is.</p>
      <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" class="flip-box-img"/>
    </div>
  </div>
  <div class="flip-box-back text-center" style={{backgroundImage: "url('/images/vendor1.png')"}}>
    <div class="inner color-white">
      <h3 class="flip-box-header">Custom Domains</h3>
      <p>A short sentence describing this callout is.</p>
      <button onClick={()=>DressHomePage()} class="flip-box-button">wedding wears</button>
    </div>
  </div>
</div>
</div>
<div class="box-item">
<div class="flip-box">
  <div class="flip-box-front text-center" style={{backgroundImage: "url('/images/vendor1.png')"}}>
    <div class="inner color-white">
      <h3 class="flip-box-header">Custom Domains</h3>
      <p>A short sentence describing this callout is.</p>
      <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" class="flip-box-img"/>
    </div>
  </div>
  <div class="flip-box-back text-center" style={{backgroundImage: "url('/images/vendor1.png')"}}>
    <div class="inner color-white">
      <h3 class="flip-box-header">Custom Domains</h3>
      <p>A short sentence describing this callout is.</p>
      <button class="flip-box-button">Learn More</button>
    </div>
  </div>
</div>
</div>
<div class="box-item">
<div class="flip-box">
  <div class="flip-box-front text-center" style={{backgroundImage: "url('/images/vendor1.png')"}}>
    <div class="inner color-white">
      <h3 class="flip-box-header">Custom Domains</h3>
      <p>A short sentence describing this callout is.</p>
      <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" class="flip-box-img"/>
    </div>
  </div>
  <div class="flip-box-back text-center" style={{backgroundImage: "url('/images/vendor1.png')"}}>
    <div class="inner color-white">
      <h3 class="flip-box-header">Custom Domains</h3>
      <p>A short sentence describing this callout is.</p>
      <button class="flip-box-button">Learn More</button>
    </div>
  </div>
</div>
</div>
<div class="box-item">
<div class="flip-box">
  <div class="flip-box-front text-center" style={{backgroundImage: "url('/images/vendor1.png')"}}>
    <div class="inner color-white">
      <h3 class="flip-box-header">Custom Domains</h3>
      <p>A short sentence describing this callout is.</p>
      <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" class="flip-box-img"/>
    </div>
  </div>
  <div class="flip-box-back text-center" style={{backgroundImage: "url('/images/vendor1.png')"}}>
    <div class="inner color-white">
      <h3 class="flip-box-header">Custom Domains</h3>
      <p>A short sentence describing this callout is.</p>
      <button class="flip-box-button">Learn More</button>
    </div>
  </div>
</div>
</div>
<div class="box-item">
<div class="flip-box">
  <div class="flip-box-front text-center" style={{backgroundImage: "url('/images/vendor1.png')"}}>
    <div class="inner color-white">
      <h3 class="flip-box-header">Custom Domains</h3>
      <p>A short sentence describing this callout is.</p>
      <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" class="flip-box-img"/>
    </div>
  </div>
  <div class="flip-box-back text-center" style={{backgroundImage: "url('/images/vendor1.png')"}}>
    <div class="inner color-white">
      <h3 class="flip-box-header">Custom Domains</h3>
      <p>A short sentence describing this callout is.</p>
      <button class="flip-box-button">Learn More</button>
    </div>
  </div>
</div>
</div>
<div class="box-item">
<div class="flip-box">
  <div class="flip-box-front text-center" style={{backgroundImage: "url('/images/vendor1.png')"}}>
    <div class="inner color-white">
      <h3 class="flip-box-header">Custom Domains</h3>
      <p>A short sentence describing this callout is.</p>
      <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" class="flip-box-img"/>
    </div>
  </div>
  <div class="flip-box-back text-center" style={{backgroundImage: "url('/images/vendor1.png')"}}>
    <div class="inner color-white">
      <h3 class="flip-box-header">Custom Domains</h3>
      <p>A short sentence describing this callout is.</p>
      <button class="flip-box-button">Learn More</button>
    </div>
  </div>
</div>
</div>
</div>
</div>
);
};

export default Vendors;
