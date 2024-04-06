import React, { useRef } from 'react';
import Navbar from '../Components/Navbar';
import "./SignupVendor.css";

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
            <div className='container-fluid boxcontainer d-flex justify-content-around'>
                <div className='boxFirst'>this box is for images</div>
                <div className='boxFirst'>
                    <form action="" className='d-flex flex-column forms'>
                        <h3>SignUp to access your dashboard</h3>
                        <input type="email" placeholder='Enter Your Email'/>
                        <input type="password"/>
                        <button type='submit'>Submit</button>
                        <span><span>ForgotPassword</span><span>help</span></span>
                    </form>
                </div>
            </div>

           
        </>
    )
}

export default SignupVendor;
