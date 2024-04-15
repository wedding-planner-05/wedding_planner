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
// import { IoIosContact } from "react-icons/io";

function SignupVendor() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                </div>
                <div className='col-md-4 formwrap'>
                    <form className='d-flex flex-column formdiv text-center  col-md-10' onSubmit={handleSubmit}>
                        <h3 className='text-center mt-2'>SignUp to access your dashboard</h3>
                        <label htmlFor="">

                            <input type="email" placeholder='Enter Your Email' className='inputPlace p-3 mb-3 col-md-12 mt-5 ' onChange={e => setEmail(e.target.value)} />
                        </label>

                        <label htmlFor=''>
                            <input type="password" placeholder='Enter Your password' className='inputPlace p-3 mb-3 col-md-12  mt-4 ' onChange={e => setPassword(e.target.value)} />
                        </label>
                        <button type='submit' className="btn btn-block mt-4 pt-3 pb-3" style={{ fontSize: "1.2rem", fontWeight: "bolder", background: "#D5133A", borderRadius: "2rem", color: "white" }}>Submit</button>
                        <div className='row mt-3 text-center d-flex justify-content-around'>
                            <span className='col-md-4 text-center'><Link style={{color:"#D5133A"}}>Forgot Password</Link></span>
                            <span className='col-md-4 text-center'><Link style={{color:"#D5133A"}}>Help</Link></span>
                        </div>
                        <div className='lines'>
                            <span></span><span style={{ border: "none" }}><i class='bx bx-heart'></i></span><span></span>
                        </div>
                        <div className='d-flex align-item-center justify-content-around mt-4 shadow p-3 pt-2 pb-2 mb-5 bg-white rounded' style={{ height: "5rem", fontSize: "2rem"}}>
                            <div className='d-flex'>
                                <AiFillGooglePlusCircle  className= "mt-2" style={{
                                    color: "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)", backgroundColor: "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"
                                }} />
                            </div>
                            <div className='d-flex align-item-center justify-content-center ' style={{ textShadow: "1px 1px black" }}>
                                Google
                            </div>
                        </div>
                        <div className='d-flex align-item-center justify-content-between flex-wrap mt-5'>
                            <div className='texts'>ARE YOU A VENDOR</div>
                            <div><button className='buttonVendor' style={{height:"4rem",width:"15rem",color:"white",fontSize:"1.5rem",borderRadius:"2rem"}}>BUISNESS SIGNUP</button></div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignupVendor;
