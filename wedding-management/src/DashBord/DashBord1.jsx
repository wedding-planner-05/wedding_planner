import React, { useState } from 'react';
import { RxDashboard } from 'react-icons/rx';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './DashBord.css';
import { RiLockPasswordLine } from "react-icons/ri";
import { RiContactsLine } from "react-icons/ri";
import { CgList } from "react-icons/cg";
import { AiOutlineSetting } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
// import Avatar from 'react-avatar';
import { TbHandClick } from "react-icons/tb";
import { AiOutlineCamera } from "react-icons/ai";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';

function DashBord1() {
    const [file, setFile] = useState(null);
    function handleFileChange(event) {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-md-3 col-lg-2  asidebar">

                        <div>
                            <ul className="list-unstyled">
                                <li><RxDashboard /><Link to="/Dashboard1"><span>Dashboard</span></Link></li>
                                <li><RiLockPasswordLine /><Link to="/Dashboard"><span>Password</span></Link></li>
                                <li><RiContactsLine /><Link to="/Dashboard2"><span>Contact-Us</span></Link></li>
                                <li><CgList /><span>Catergory-List</span></li>
                                <li><AiOutlineSetting /><span>Setting</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col content  boxborder">
                        <div>
                            <h1 className='ml-5'>Vendor Profile</h1>
                            <div className='d-flex align-item-center profile justify-content-center row-md-1'>
                                <div className='ml-4 col-md-1'>
                                    <img src="/images/logo.png" alt="" className='imgex'/>
                                </div>
                                <div className='ml-4 displayblock col-md-4'>
                                    <p><TbHandClick />One More Click</p>
                                    <p><AiOutlineCamera />photoGrapher</p>
                                    <p><CiLocationOn />Madhya Pradesh</p>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <div className='col-md-12'>
                                    <div className="container-fluid boxfrom">
                                        <form className="row d-flex align-item-center justify-content-center flex-column">

                                            <div className="row">
                                                <div className="row mt-5">
                                                    <div className="mb-3 col">
                                                        <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                                                        <input type="password" className="form-control p-4 emails" id="exampleInputPassword1" />
                                                    </div>

                                                    <div className="mb-3 col">
                                                        <label htmlFor="exampleInputPassword1" className="form-label">Service Charge</label>
                                                        <input type="password" className="form-control p-4 emails" id="exampleInputPassword1" />
                                                    </div>
                                                </div>
                                                <hr />

                                                <div className="row">
                                                    <div className="mb-3 ">
                                                        <label htmlFor="exampleInputPassword1" className="form-label">Email Address</label>
                                                        <input type="password" className="form-control p-4 emails" id="exampleInputPassword1" />
                                                    </div>
                                                    <hr />
                                                    <div className="mb-3 col">
                                                        <label htmlFor="exampleInputPassword1" className="form-label">Phone Number</label>
                                                        <input type="password" className="form-control p-4 emails" id="exampleInputPassword1" />
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className='row'>
                                                    <div className="mb-3 col-md-6">
                                                        <label htmlFor="exampleInputPassword1" className="form-label">Location</label>
                                                        {/* <input type="text" className="form-control p-4 emails" id="exampleInputPassword1" /> */}
                                                        <br />
                                                        <select name="select" id="" style={{ border: "none", width: "100%", height: "2.9rem", boxShadow: "0 0 0.5rem black", borderRadius: ".5rem" }}>
                                                            <option value="">indore</option>
                                                            <option value="">Dewas</option>
                                                            <option value="">Ujjain</option>
                                                            <option value="">Sehore</option>
                                                            <option value="">Bhopal</option>
                                                        </select>
                                                    </div>
                                                    <div className="mb-3 col-md-6">
                                                        <label htmlFor="exampleInputPassword1" className="form-label">Upload Image</label>
                                                        <input type="file" className="form-control p-4 emails" id="exampleInputPassword1" onChange={handleFileChange} />
                                                    </div>
                                                </div>
                                                <hr />


                                                <hr />

                                                <div className="row">
                                                    <div className="d-flex justify-content-center">
                                                        <div className="">
                                                            <button type="button" className="btn btn-info m-3" >Reset</button>
                                                        </div>
                                                        <div className="">
                                                            <button type="button" className="btn btn-warning m-3">Save</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </>
    );
}

export default DashBord1;
