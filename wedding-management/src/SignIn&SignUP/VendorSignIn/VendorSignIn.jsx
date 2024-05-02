import React, { useState } from 'react';
import axios from 'axios';
import "./VendorSignIn.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import GoogleAuth from './GoogleAuth';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';


function SignInVendor() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setisLogin] = useState(false);
    const [choise, setChoise] = useState("");
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();

        if (email == "" && password == "") {
            toast.error("plese fill the details")
        } else {
            axios.post(`http://localhost:3000/${choise}/${choise}/signin`, { email, password })
                .then(result => {
                    if (result.status == "200" || result.status == "201") {
                        console.log(result);
                        console.log("successfull");
                        toast.success("Login Success")
                        sessionStorage.setItem("current-user", email);
                        sessionStorage.setItem("isLoggedIn", "true");
                        navigate('/dashboard1')
                    }
                    else {

                        toast.error("bad request")
                    }
                })
                .catch(err => {
                    console.log(err);
                    console.log("this is error", err);
                    toast.error(" please Sign Up first")
                });
        }
    };
    const VendoSignUp = ()=>{
          navigate("/vendorSignUp")
    }
    return (
        <>
            <Navbar />
            <ToastContainer />
            <div className='col-md-12 d-flex align-item-center justify-content-center'>

                <div className='row boxwrapper container-fluid'>
                    <div className='col-md-5 imagediv'>
                        {<img src="/images/Rectangle 12.png" className="col-md-10" alt="" />}
                    </div>
                    <div className='col-md-4 formwrap'>
                        <form className='d-flex flex-column formdiv text-center  col-md-12' onSubmit={handleSubmit}>
                            <h3 className='text-center mt-2 fontstyles'>VENDOR SIGNIN</h3>
                            <label htmlFor="">
                                <select name="" id="" className='col-md-12 pt-3 pb-3 selection' onChange={(e) => { setChoise(e.target.value) }} style={{ border: "2px solid #D5133A", filter: "drop-shadow(0 0 0.25rem #D5133A)" }}>
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
                                <input type="email" placeholder='Enter Your Email' className='inputPlace p-3 mb-3 col-md-12 mt-5 ' onChange={e => setEmail(e.target.value)} style={{ border: "2px solid #D5133A" }} />
                            </label>

                            <label htmlFor=''>
                                <input type="password" placeholder='Enter Your password' className='inputPlace p-3 mb-3 col-md-12  mt-4 ' onChange={(e) => {
                                    setPassword(e.target.value);
                                    getStrength(e.target.value);
                                }} style={{ border: "2px solid #D5133A" }} />
                            </label>

                            <button type='submit' className="btn btn-block mt-4 pt-3 pb-3" style={{ fontSize: "1.2rem", fontWeight: "bolder", background: "#D5133A", borderRadius: "2rem", color: "white" }}>Submit</button>
                            <div className='row mt-3 text-center d-flex justify-content-around'>
                                <span className='col-md-4 text-center'><Link style={{ color: "#D5133A" }}>Forgot Password</Link></span>
                                <span className='col-md-4 text-center'><Link style={{ color: "#D5133A" }}>Help</Link></span>
                            </div>
                            {/* <div className='mt-4'>
                                <GoogleAuth setIsLogin={setisLogin} />
                            </div> */}
                            <div className='lines'>
                                <span></span><span style={{ border: "none" }}><i class='bx bx-heart'></i></span><span></span>
                            </div>
                            <div></div>
                        </form>
                            <div className='d-flex align-item-center justify-content-between flex-wrap mt-3'>
                                {/* <div className='texts'>ARE YOU A VENDOR</div> */}
                                <div onClick={()=>VendoSignUp()} className='text-center col-md-12'><button className='buttonVendor text-center' style={{ height: "4rem", width: "15rem", color: "white", fontSize: "1.5rem", borderRadius: "2rem" }}>Vendor signup</button></div>
                            </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default SignInVendor;
