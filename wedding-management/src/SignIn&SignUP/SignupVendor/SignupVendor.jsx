import React, { useState } from 'react';
import axios from 'axios';
import './SignupVendor.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
// import { AiFillGooglePlusCircle } from "react-icons/ai";
// import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import GoogleAuth from './GoogleAuth';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';


function SignupVendor() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setisLogin] = useState(false);
    const [choise, setChoise] = useState("");
    const navigate = useNavigate();

    console.log(choise, "this is choise");
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
    console.log("choise: ", choise)
    console.log("email: ", email)
    console.log("password: ", password)

    const handleSubmit = (event) => {
        event.preventDefault();

        if (email == "" || password == "") {
            toast.error("plese fill the details")
        } else {
            axios.post(`http://localhost:3000/${choise}/${choise}/signup`, { email, password })
                .then(result => {
                    if (result.status == "201" || result.status == "200") {
                        toast.success("Sign In Success")
                        console.log(result);
                        console.log("success");

                        navigate('/vendorSignIn')
                    }
                    else {

                        toast.error("bad request")
                    }
                })
                .catch(err => {
                    console.log(err);
                    console.log("this is error", err);
                    toast.error("this is load")
                });
        }
    };
    const VendorSignIn = () => {
        navigate('/vendorSignIn')
    }

    return (
        <>
            <Navbar />
            <ToastContainer />

            {/* <div className='col-md-12 d-flex align-item-center justify-content-center'> */}

                <div className='row boxwrapper container-fluid'>
                    <div className='col-md-3 imagediv'>
                        {<img src="/images/Rectangle 12.png" style={{height:'90%'}} className="col-md-10" alt="" />}
                    </div>
                    <div className='col-md-4 formwrap'>
                        <form className='d-flex flex-column formdiv text-center  col-md-12' onSubmit={handleSubmit}>
                            <h3 className='text-center fontstyles'>VENDOR SIGNUP</h3>
                            <label htmlFor="">
                                <select name="" id="" className='col-md-12 pt-2 pb-2 selection' onChange={(e) => { setChoise(e.target.value) }} >
                                    <option value="">Select Vendor Type</option>
                                    <option value="cater">cater</option>
                                    <option value="dress">dress</option>
                                    <option value="garden">garden</option>
                                    <option value="mehendi">mehendi</option>
                                    <option value="photographer">photographer</option>
                                    <option value="sound">sound</option>
                                </select>
                            </label>
                            <label htmlFor="">
                                <input type="email" placeholder='Enter Your Email' className='email pt-2 pb-2 mb-2 col-md-12 mt-4'  onChange={e => setEmail(e.target.value)} />
                            </label>

                            <label htmlFor=''>
                                <input type="password" placeholder='Enter Your password'  className='p-2 mb-2 col-md-12  mt-2 ' onChange={(e) => {
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
                                <span className='col-md-4 text-center'><Link style={{ textDecoration:'none',color: "black" }}>Forgot Password</Link></span>
                                <span className='col-md-4 text-center'><Link style={{ textDecoration:'none',color: "black"  }}>Help</Link></span>
                            </div>
                            {/* <div className='mt-4'>
                                <GoogleAuth setIsLogin={setisLogin} />
                            </div> */}
                            <div className='lines'>
                                <span></span><span style={{ border: "none" }}><i class='bx bx-heart'></i></span><span></span>
                            </div>
                            <div></div>
                        </form>
                        <div style={{ width: '80%' }}  className='d-flex align-item-center justify-content-between flex-wrap mt-2'>
                        <h6 className='p-2'>Are you a vendor</h6>
                            <button onClick={() => VendorSignIn()} style={{ borderRadius: '20px', backgroundColor: 'crimson', color: 'white' }} className='btn'> vendor signUp </button>

                            {/* <div onClick={() => {  }} className='text-center col-md-12'><button className='buttonVendor text-center' style={{ height: "4rem", width: "15rem", color: "white", fontSize: "1.5rem", borderRadius: "2rem" }}>BUISNESS SIGNIN</button></div> */}
                        </div>
                    </div>
                </div>
            {/* </div> */}

            <Footer />
        </>
    );
}

export default SignupVendor;
