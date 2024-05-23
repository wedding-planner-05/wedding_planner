import { useState } from 'react';
import axios from 'axios';
import "./VendorSignIn.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Footer from '../../Components/Footer/Footer';
import Swal from 'sweetalert2';


function SignInVendor() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setisLogin] = useState(false);
    const [choise, setChoise] = useState("");
    const navigate = useNavigate();

    const signUp = ()=>{
        Swal.fire({
            title: "Please SignUp First",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "  Ok  "
          }).then((result) => {
            if (result.isConfirmed) {
                navigate("/vendorSignUp")
            }
          });
    }

    const message = ()=>{
        Swal.fire({
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
        
    }
    const fillDetail = ()=>{
        Swal.fire({
            icon: "info",
            title: "Please Enter Detail",
            showConfirmButton: false,
            timer: 1500
          });
        
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const vendorType = choise;
        if (email == "" && password == "") {
            // toast.error("plese fill the details")
            fillDetail()
        } else {
            axios.post(`http://localhost:3000/${choise}/${choise}/signin`, { email, password })
                .then(result => {
                        console.log(result);
                    if (result.status == "200" || result.status == "201") {
                        // console.log(JSON.stringify(result.data.gardenobj));

                        message()
                          
                        // toast.success("Login Success")
                        // sessionStorage.setItem("current-user", JSON.stringify(result.data.gardenobj));
                        sessionStorage.setItem("isLoggedIn", "true");
                        sessionStorage.setItem("caterType", `${choise}`);
                        sessionStorage.setItem("userID", result.data.data.id);
                        sessionStorage.setItem("email", email);
                        console.log('result',result.data.data.id);

                        switch (choise) {
                            case "cater":
                                navigate("/CaterHomeDetailsDashBoard")
                                break;
                            case "dress":
                                navigate("/DressHomeDetailsDashBoard")
                                break;
                            case "garden":
                                navigate("/GardenHomeDetailsDashBoard")
                                break;
                            case "sound":
                                navigate("/SoundHomeDetailsDashBoard")
                                break;
                        }
                    }
                    else {
                        toast.error("bad request")
                    }
                })
                .catch(err => {
                    console.log("this is error", err);
                    // toast.error(" please Sign Up first")
                    signUp()
                });
        }
    };
    const VendoSignUp = () => {
        navigate("/vendorSignUp")
    }
    return (
        <>
            {/* <Navbar /> */}
            <ToastContainer />
            {/* <div className=' '> */}

                <div className='row boxwrapper container-fluid'>
                    <div className='col-md-3 imagediv'>
                        {<img src="/images/Rectangle 12.png" style={{height:'90%'}} className="col-md-10" alt="" />}
                    </div>
                    <div className='col-md-4 formwrap'>
                        <form className='d-flex flex-column formdiv text-center col-md-12' onSubmit={handleSubmit}>
                            <h3 className='text-center fontstyles'>VENDOR SIGNIN</h3>
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
                                <input style={{ textDecoration: 'none', color: 'black' }} type="email" placeholder='Enter email' className='email pt-2 pb-2 mb-2 col-md-12 mt-4' onChange={e => setEmail(e.target.value)} />
                            </label>

                            <label htmlFor=''>
                                <input type="password" placeholder='Enter Your password' className='p-2 mb-2 col-md-12  mt-2 ' onChange={(e) => {
                                    setPassword(e.target.value);
                                    // getStrength(e.target.value);
                                }} />
                            </label>

                            <button type='submit' className="btn btn-block mt-3 " style={{ fontSize: "1.2rem", fontWeight: "bolder", background: "#D5133A", borderRadius: "2rem", color: "white" }}>Submit</button>

                            <div className='row mt-3 text-center d-flex justify-content-around'>
                                <small className='col-md-4 text-center'><Link style={{ textDecoration: 'none', color: 'black' }} to="/forgotPassword">Forgot Password</Link></small>
                            </div>

                            <div className='lines'>
                                <span></span><span style={{ border: "none" }}><i className='bx bx-heart'></i></span><span></span>
                            </div>
                            <div></div>
                        </form>
                        <div style={{ width: '100%' }} className='d-flex justify-content-around flex-wrap mt-2'>

                            <h6 className='p-2'>Not Registered ?</h6>
                            <button onClick={() => VendoSignUp()} style={{ borderRadius: '20px', backgroundColor: 'crimson', color: 'white' }} className='btn'> Sign Up First</button>
                            {/* <div onClick={()=>VendoSignUp()} className='text-center col-md-12'><button  className='buttonVendor text-center' style={{ height: "2rem", width: "15rem", color: "white", fontSize: "1.5rem", borderRadius: "2rem" }}>Vendor signup</button></div> */}
                        </div>
                    </div>
                </div>
            {/* </div> */}

            <Footer />
        </>
    );
}

export default SignInVendor;