import { IoIosGift } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import './Footer.css'
export const Footer = () => {
    return <>
        <footer className="footer">
            <div className="container">
                <div className="d-flex gap-5">
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