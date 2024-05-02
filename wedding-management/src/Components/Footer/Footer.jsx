// import React from "react";
// import { FaEnvelope } from "react-icons/fa";
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <footer className="bg-light mt-5">

//       <div className="mx-3 p-2 contact-main-footer">
//         <div className="row justify-content-around m-4 text-smaller">
//           <div className="col-md-4 " >

//             <div className="text-center">
//               <img
//                 className="img-fluid mb-4"
//                 width={"50%"}
//                 style={{backgroundColor:'red',borderRadius:'1rem'}}
//                 src="images/wedding-planner-high-resolution-logo-white-transparent.png"
//                 alt=""
//               />
//             </div>
//             <p>
//               Welcome to Wedding planning, where we turn your wedding dreams
//               into reality. From venue selection to guest management, we're here
//               to guide you every step of the way. Let's make your special day
//               truly unforgettable.
//             </p>
//           </div>
//           <div className="col-md-2">
//             <h6>Start Planning</h6>
//             <ul className="list-unstyled" style={{boxShadow:"none !important"}}>
//               <li>
//                 <a className="no-decoration" href="#">
//                   Search by Vendor
//                 </a>
//               </li>
//               <li>
//                 <a className="no-decoration" href="#">
//                   Search by City
//                 </a>
//               </li>
//               <li>
//                 <a className="no-decoration" href="#">
//                   Download Our App
//                 </a>
//               </li>
//               <li>
//                 <a className="no-decoration" href="#">
//                   Top Rates vendors
//                 </a>
//               </li>
//               <li>
//                 <a className="no-decoration" href="#">
//                   Destination Wedding
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="col-md-2">
//             <h6>Wedding Ideas</h6>
//             <ul className="list-unstyled">
//               <li>
//                 <a className="no-decoration" href="#">
//                   Wedding Blog
//                 </a>
//               </li>
//               <li>
//                 <a className="no-decoration" href="#">
//                   Wedding Gallery
//                 </a>
//               </li>
//               <li>
//                 <a className="no-decoration" href="#">
//                   Real Wedding
//                 </a>
//               </li>
//               <li>
//                 <a className="no-decoration" href="#">
//                   Submit Wedding
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="col-md-2">
//             <h6>Home</h6>
//             <ul className="list-unstyled">
//               <li>
//                 <a className="no-decoration" href="#">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a className="no-decoration" href="#">
//                   Contact Us
//                 </a>
//               </li>
//               <li>
//                 <a className="no-decoration" href="#">
//                   Terms & Conditions
//                 </a>
//               </li>
//               <li>
//                 <a className="no-decoration" href="#">
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <a className="no-decoration" href="#">
//                   Cancellation Policy
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="col-md-2">
//             <h6>Services</h6>
//             <ul className="list-unstyled">
//               <li>
//                 <a className="no-decoration" href="#">
//                   Heena Artist
//                 </a>
//               </li>
//               <li>
//                 <a className="no-decoration" href="#">
//                   Bridal Dress
//                 </a>
//               </li>
//               <li>
//                 <a className="no-decoration" href="#">
//                   Groom Dress
//                 </a>
//               </li>
//               <li>
//                 <a className="no-decoration" href="#">
//                   Music & Dance
//                 </a>
//               </li>
//               <li>
//                 <a className="no-decoration" href="#">
//                   Photographers
//                 </a>
//               </li>
//               <li>
//                 <a className="no-decoration" href="#">
//                   Catering Services
//                 </a>
//               </li>
//               <li>
//                 <a className="no-decoration" href="#">
//                   Makeup Artist
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div 
//           className="m-0 row d-flex align-items-center py-2"
//           style={{ backgroundColor: "crimson", color: "white" }}
//         >
//           <div className="col-md-auto text-center">
//             <span className="text-smaller" >
//               <FaEnvelope className="" />{" "}
//               <a
//                 style={{color: "white"}}   
//                 className="no-decoration ps-3"
//                 href="mailto:wedding.planner.techwizards@gmail.com"
//               >
//                 {" "}
//                 wedding.planner.techwizards@gmail.com
//               </a>
//             </span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { IoIosGift } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import './Footer.css'
export const Footer = () => {
    return <>
        <footer style={{border:"1px solid"}} className="footer">
            <div className="container">
                <div className="row gap-5">
                    <div className="footer-col ml-3">
                        <div className='col-md-6 ms-1 title' style={{ width: "250px" }}>
                            
                            <span className='ms-3 fs-3 name'>
                                Wedding
                            </span>
                        </div>
                        <div className="p-3">
                            <p style={{ color: "black" }}>
                                The Wedding planner is a smartest tool that help you to manage your wedding without any stress  .  .  .
                            </p>

                        </div>
                        <div className="social-links mt-0">
                            <a href="https://www.facebook.com/" target="_blank"> <FaFacebook className="fs-4" />   </a>
                            <a href="https://www.twitter.com/" target="_blank"><AiFillTwitterCircle className="fs-4" /></a>
                            <a href="https://www.instagram.com/" target="_blank"><RiInstagramFill className="fs-4" /></a>
                            <a href="https://www.youtube.com/" target="_blank"><FaYoutube className="fs-4" /></a>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h4 className="mt-3">company</h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Our services</a></li>
                            <li><a href="#">Privacy policy</a></li>
                            <li><a href="#">Affiliate program</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4 className="mt-3">Start Planning</h4>
                        <ul>
                            <li><a href="#">Search by Vendor</a></li>
                            <li><a href="#">Search by City</a></li>
                            <li><a href="#">Download Our App</a></li>
                            <li><a href="#">Top Rates vendors</a></li>
                            <li><a href="#">Destination Wedding</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4 className="mt-3">Services</h4>
                        <ul>
                            <li><a href="#">Garden</a></li>
                            <li><a href="#">Cater</a></li>
                            <li><a href="#">Dress</a></li>
                            <li><a href="#">Sound & DJ</a></li>
                            <li><a href="#">Mehandi</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <div className="container-fluid p-2 bg-danger d-flex justify-content-center align-items-center">
                <h6 className="mt-2 text-white"> &copy; 2024 UtsavUphar. All rights reserved.</h6>
            </div> */}
        </footer>
    </>

};

export default Footer;