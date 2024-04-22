// VendorSignIn.jsx
// SigninVendor Folder

import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Navbar from '../NA'
// import Footer from '../Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

function VendorSignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let [vendorType, setVendorType] = useState("");

    // let vendorType='garden';
    // console.log(vendorType);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
             vendorType=vendorType.toLowerCase();
            let port=3000;
           
            switch (vendorType) {
                case 'photographer':
                    port = 3002;
                    break;
                case 'garden':
                    port = 3001;
                    break;
                default:
                    break;
            }
            axios.post(`http://localhost:${port}/${vendorType}-vendor/signin`, { email, password, vendorType })
            .then((response)=>{
                console.log(response.data.data);
                toast.success("Sign In successful!");
                let vendor=JSON.stringify(response.data.data)
                localStorage.setItem(`${vendorType}`,vendor);

            }).catch((err)=>{
            console.log("url err "+`http://localhost:${port}/${vendorType}-vendor/signin`);
                console.log("Vendor Sign In Err ",err);
                toast.error("Sign In failed. Please try again.");
        })
        } catch (error) {
            console.error(error);
            toast.error("Sign In failed. Please try again.");
        }
    };

    return (
        <>
            <Navbar/>
            <ToastContainer />

            <div className='container-fluid boxcontainer d-flex justify-content-center mt-5'>
                <div className='row'>
                    <div className='col-lg-6 col-md-12 text-center'>
                        <img src="/images/Rectangle 12.png" alt="" className='img-fluid custom-img-vendor'/>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <div className='borders p-3'>
                            <form className='forms' onSubmit={handleSubmit}>
                                <h4 className='text-center mb-4'>Sign In to access your dashboard</h4>

                                <div className='form-group'>
                                    <select id="vendorType" className='form-control mb-3' onChange={e => setVendorType(e.target.value)} required>
                                        <option value="">Select Types of Vendor</option>
                                        <option value="Photographer">Photographer</option>
                                        <option value="Dress">Dress</option>
                                        <option value="Garden">Garden</option>
                                        <option value="DJ Sound">DJ Sound</option>
                                        <option value="Cater">Cater</option>
                                        <option value="Mehendi Artist">Mehendi Artist</option>
                                    </select>
                                </div>                               

                                <div className='form-group'>
                                    <input type="email" placeholder='Enter Your Email' className='form-control mb-3' onChange={e => setEmail(e.target.value)} required />
                                </div>

                                <div className='form-group'>
                                    <input type="password" placeholder='Enter Your Password' className='form-control mb-3' onChange={e => setPassword(e.target.value)} required />
                                </div>

                                <div className='text-center'>
                                    <button type='submit' className="btn btn-success mb-3">Submit</button>
                                </div>

                                <div className='text-smaller d-flex justify-content-between mb-3'>
                                    <span>Forgot Password</span>
                                    <span>Help</span>
                                </div>
                            </form>

                            <div className='text-center'>
                                <span className='text-smaller'>Are you New Vendor ?</span>
                                <a className='ml-2'>Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default VendorSignIn;
