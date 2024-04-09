import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './SignupVendor.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoIosContact } from "react-icons/io";
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
            });
    };

    return (
        <>
            <Navbar />
            <ToastContainer />

            <div className='container-fluid boxcontainer d-flex justify-content-around mt-5 row-md'>
                <div className='boxFirst col-lg-6 col-md-12'>
                    <img src="/images/Rectangle 12.png" alt="" className='imagesize' />
                </div>
                <div className='boxFirst borders col-lg-6 col-md-12'>
                    <form className='d-flex flex-column forms' onSubmit={handleSubmit}>
                        <h3>SignUp to access your dashboard</h3>

                        <label htmlFor="">
                            
                            <input type="email" placeholder='Enter Your Email' className='inputPlace p-3 mb-3' onChange={e => setEmail(e.target.value)} />
                        </label>


                        <input type="password" placeholder='Enter Your password' className='inputPlace p-3 mb-3' onChange={e => setPassword(e.target.value)} />
                        <button type='submit' className="btn btn-success btn-block">Submit</button>
                        <div className='d-flex justify-content-between mt-3 forgot'>
                            <span>Forgot Password</span>
                            <span>Help</span>
                        </div>

                       
                    </form>
                    <div className='signUP text-center mt-3'>
                        <span>Already have an account</span>
                        <button className='btn btn-secondary ml-2'>SignUp</button>
                    </div>
                </div>
                <Footer/>
            </div>
            
        </>
    );
}

export default SignupVendor;
