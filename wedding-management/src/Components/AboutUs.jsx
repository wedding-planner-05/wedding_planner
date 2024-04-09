// import { FaHeartPulse } from "react-icons/fa6";
// import React from 'react';
// import './AboutUs.css';

// const AboutUs = () => {
//   return<>
//   <div className="about-heading">
//   <div className="header-text text-center">

  
//    <h3>About us</h3>
//    <span style={{color:"crimson"}}>______________<FaHeartPulse/>  _______________</span><br />
//    </div>
//   </div>

//   <div className="red-div">
//     </div>
//     <div className="white-div">
//     <div className="about-text ">
//       <div className="para">
//     <span>Who we are</span>
//     <p>Wedding Management System is a smart tool to help you plan your wedding without any stress. Our system lets you easily book everything you need for your big day, like dresses, henna artists, music DJs, and photographers. No more running around or worrying about finding different vendors. We've made it simple for you. Think of us as your personal wedding assistant, here to make planning easy and fun.
// Wedding Management System is a smart tool to help you plan your wedding without any stress. Think of us as your personal wedding assistant, here to make planning easy and fun.</p>
// </div>
//     </div>
//     <div className="about-image">
//     <img src="/images/About-us.webp" alt="" />
//     </div>
//       </div>

                       
//   </>

// }

// export default AboutUs;
// -----------------------------------------------------**************----------------------------------------------


import { FaHeartPulse } from "react-icons/fa6";
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div>
      <div className="row">
        <div className="col-12 text-center" style={{width:"90%"}}>
          <h3>About us</h3>
          <span style={{color: "crimson"}}>______________<FaHeartPulse/>  _______________</span><br />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 red-div"></div>
        <div className="col-md-6 white-div">
          <div className="about-text">
            <div className="para">
              <span>Who we are</span>
              <p>
                Wedding Management System is a smart tool to help you plan your wedding without any stress. Our system lets you easily book everything you need for your big day, like dresses, henna artists, music DJs, and photographers. No more running around or worrying about finding different vendors. We've made it simple for you. Think of us as your personal wedding assistant, here to make planning easy and fun.
                Wedding Management System is a smart tool to help you plan your wedding without any stress. Think of us as your personal wedding assistant, here to make planning easy and fun.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 about-image">
          <img src="/images/About-us.webp" alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
