// import React, { useRef } from 'react';
// import Navbar from '../Components/Navbar';
// import "./SignupVendor.css";
// import Footer from '../Components/Footer';


// function SignupVendor() {
//     // Creating refs for input fields
//     const nameRef = useRef();
//     const emailRef = useRef();
//     const messageRef = useRef();

//     // Function to handle form submission
//     const handleSubmit = (event) => {
//         event.preventDefault();

//         // Accessing input values using refs
//         const name = nameRef.current.value;
//         const email = emailRef.current.value;
//         const message = messageRef.current.value;

//         // Do something with the form data, e.g., send it to a server
//         console.log("Name:", name);
//         console.log("Email:", email);
//         console.log("Message:", message);

//         // Reset the form fields
//         nameRef.current.value = '';
//         emailRef.current.value = '';
//         messageRef.current.value = '';
//     };

//     return (
//         <>
//             {/* <Navbar /> */}
//             <div className='container-fluid boxcontainer d-flex justify-content-around mt-5 row-md'>
//                 <div className='boxFirst'><img src="/images/Rectangle 12.png"alt=""  className='imagesize'/></div>
//                 <div className='boxFirst borders col-md-4'>
//                     <form action="" className='d-flex flex-column forms col-md-12' onSubmit={handleSubmit}>
//                         <h3>SignUp to access your dashboard</h3>
//                         <input type="email" placeholder='Enter Your Email' className='inputPlace p-3' />
//                         <input type="password" placeholder='Enter Your password' className='inputPlace p-3' />
//                         <button type='submit'>Submit</button>
//                         <div className='d-flex forgetmail'><span>ForgotPassword</span><span>Help</span></div>
//                     </form>
//                     <div className='signUP'><span>alreay have an account</span> <button className='buttonss'>signUP</button></div>
//                 </div>
//             </div>
//             {/* <Footer/> */}


//         </>
//     )
// }

// export default SignupVendor;


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
            {/* <Navbar /> */}
            <div className='container-fluid boxcontainer d-flex justify-content-around mt-5 row-md'>
                <div className='boxFirst col-lg-6 col-md-12'><img src="/images/Rectangle 12.png" alt="" className='imagesize' /></div>
                <div className='boxFirst borders col-lg-6 col-md-12'>
                    <form action="" className='d-flex flex-column forms' onSubmit={handleSubmit}>
                        <h3>SignUp to access your dashboard</h3>
                        <input type="email" placeholder='Enter Your Email' className='inputPlace p-3 mb-3' />
                        <input type="password" placeholder='Enter Your password' className='inputPlace p-3 mb-3' />
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
            </div>
            {/* <Footer/> */}
        </>
    )
}

export default SignupVendor;
