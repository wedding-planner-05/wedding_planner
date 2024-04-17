import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import './SignupVendor.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import GoogleAuth from './GoogleAuth';
import Home from '../Home-Page/Home';
// import { IoIosContact } from "react-icons/io";

function SignupVendor() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[isLogin,setisLogin] = useState(false);

    const [strength, setStrength] = useState("");
    const strengthLabel = ["weak", "normal", "strong"];

    const getStrength = (password) => {
        let strengthIndicator = 0;
        let uppercase = false;
        let number = false;
        let lowercase = false;

        for (let index = 0; index < password.length; index++) {
            const char = password.charCodeAt(index);
            if (!uppercase && char >= 65 && char <= 90) {
                uppercase = true;
                strengthIndicator++;
            }
            if (!number && char >= 48 && char <= 57) {
                number = true;
                strengthIndicator++;
            }
            if (!lowercase && char >= 97 && char <= 122) {
                lowercase = true;
                strengthIndicator++;
            }
        }
        console.log(strengthIndicator);
        setStrength(strengthLabel[strengthIndicator]);
    };
    // const handleSuccessfulAuth = () => {
    //     // Redirect to home page
    //     // Assuming you are using React Router for navigation
    //     history.push("/");
    // };
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post("http://localhost:8080/CaterLogin/signup", { email, password })
            .then(result => {
                console.log(result);
                console.log("success");
                toast.success("Success Notification")
            })
            .catch(err => {
                console.log(err);
                console.log("this is error");
                toast.error("this is load")
            });
    };

    return (
        <>
            {/* <Navbar/> */}
            <ToastContainer />

            <div className='row boxwrapper'>
                <div className='col-md-5 imagediv'>
                    {<img src="/images/Rectangle 12.png" className="col-md-10" alt="" />}
                    {/* <Carousel>
                            <div>
                                <img src="https://image.wedmegood.com/resized/450X/uploads/member/2217715/1627736739_IMG_20210715_101647.jpg?crop=315,0,1641,923" alt="Image 1" />
                            </div>
                            <div>
                                <img src="https://image.wedmegood.com/resized/450X/uploads/member/2580754/1637732321_165223224_478382626847015_3720280041098758805_n.jpg" alt="Image 2" />
                            </div>
                            <div>
                                <img src="https://image.wedmegood.com/resized/450X/uploads/member/1257311/1589628221_Screenshot_from_2020_05_16_16_53_03.png" alt="Image 3" />
                            </div>
                        </Carousel> */}
                </div>
                <div className='col-md-4 formwrap'>
                    <form className='d-flex flex-column formdiv text-center  col-md-12' onSubmit={handleSubmit}>
                        <h3 className='text-center mt-2'>SignUp to access your dashboard</h3>
                        <label htmlFor="">
                            <input type="email" placeholder='Enter Your Email' className='inputPlace p-3 mb-3 col-md-12 mt-5 ' onChange={e => setEmail(e.target.value)} />
                        </label>

                        <label htmlFor=''>
                            <input type="password" placeholder='Enter Your password' className='inputPlace p-3 mb-3 col-md-12  mt-4 ' onChange={(e) => {
                                setPassword(e.target.value);
                                getStrength(e.target.value);
                            }} />
                        </label>
                        <div>
                            <div className={`bars ${strength}`}>
                                <div></div>
                            </div>
                            <div className='strength'>
                                {strength && <>{strength}:password</>}
                            </div>
                        </div>
                        <button type='submit' className="btn btn-block mt-4 pt-3 pb-3" style={{ fontSize: "1.2rem", fontWeight: "bolder", background: "#D5133A", borderRadius: "2rem", color: "white" }}>Submit</button>
                        <div className='row mt-3 text-center d-flex justify-content-around'>
                            <span className='col-md-4 text-center'><Link style={{ color: "#D5133A" }}>Forgot Password</Link></span>
                            <span className='col-md-4 text-center'><Link style={{ color: "#D5133A" }}>Help</Link></span>
                        </div>
                        <div className='mt-5'>
                            <GoogleAuth setIsLogin={setisLogin}/>
                        </div>
                        <div className='lines'>
                            <span></span><span style={{ border: "none" }}><i class='bx bx-heart'></i></span><span></span>
                        </div>
                        <div></div>
                        <div className='d-flex align-item-center justify-content-between flex-wrap mt-5'>
                            <div className='texts'>ARE YOU A VENDOR</div>
                            <div><button className='buttonVendor' style={{ height: "4rem", width: "15rem", color: "white", fontSize: "1.5rem", borderRadius: "2rem" }}>BUISNESS SIGNUP</button></div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignupVendor;
