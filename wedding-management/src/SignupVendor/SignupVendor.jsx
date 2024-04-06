import React, { useRef } from 'react';
import Navbar from '../Components/Navbar';
import "./SignupVendor.css";
import Footer from '../Components/Footer';


function SignupVendor() {
    // Creating refs for input fields
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Accessing input values using refs
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const message = messageRef.current.value;

        // Do something with the form data, e.g., send it to a server
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        // Reset the form fields
        nameRef.current.value = '';
        emailRef.current.value = '';
        messageRef.current.value = '';
    };

    return (
        <>
            <Navbar />
            <div className='container-fluid boxcontainer d-flex justify-content-around mt-5'>
                <div className='boxFirst'><img src="/images/Rectangle 12.png"alt=""  className='imagesize'/></div>
                <div className='boxFirst borders'>
                    <form action="" className='d-flex flex-column forms' onSubmit={handleSubmit}>
                        <h3>SignUp to access your dashboard</h3>
                        <input type="email" placeholder='Enter Your Email' className='inputPlace p-3' />
                        <input type="password" placeholder='Enter Your password' className='inputPlace p-3' />
                        <button type='submit'>Submit</button>
                        <div className='d-flex forgetmail'><span>ForgotPassword</span><span>Help</span></div>
                    </form>
                    <div className='signUP'><span>alreay have an account</span> <button className='buttonss'>signUP</button></div>
                </div>
            </div>
            {/* <Footer/> */}


        </>
    )
}

export default SignupVendor;
