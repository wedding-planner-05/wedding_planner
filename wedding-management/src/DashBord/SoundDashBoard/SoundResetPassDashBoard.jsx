import React from 'react';
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
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Navbar from '../../Components/Navbar/Navbar';
import swal from 'sweetalert';



function SoundResetPassDashBoard() {

    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-md-3 col-lg-2  asidebar">
                        <div>
                        <ul className="list-unstyled">
                                <li>
                                    <Link to="/CaterProfile">
                                        <strong style={{ color: "black" }}>
                                            <CgList />
                                        </strong>
                                        <span style={{ color: "black" }}>Profile</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/SoundHomeDetailsDashBoard" className="textnone">
                                        <strong style={{ color: "black" }}>
                                            <RxDashboard />
                                        </strong>
                                        <span style={{ color: "black" }}>Dashboard</span>
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link to="/SoundResetPassDashBoard" className="textnone">
                                        <strong style={{ color: "black" }}>
                                            <RiLockPasswordLine />
                                        </strong>
                                        <span style={{ color: "black" }}>Password</span>
                                    </Link>
                                </li> */}
                                <li>
                                    <Link to="/SoundContactDashBoard" className="textnone">
                                        <strong style={{ color: "black" }}>
                                            <RiContactsLine />
                                        </strong>
                                        <span style={{ color: "black" }}>Contact-Us</span>
                                    </Link>
                                </li>
                                <li>
                                    <strong style={{ color: "black" }}>
                                        <AiOutlineSetting />
                                    </strong>
                                    <span className="btn" style={{ color: "black" }} onClick={()=>{ swal("Coming Soon", "Working on that", "info")}}>Setting</span>

                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col content  boxborder">
                        <div>
                            {/* <h1 className='ml-5'>Vendor Profile</h1>
                            <h4 className='container ml-5'>password Update</h4>
                            <div className='d-flex align-item-center profile justify-content-center row'>
                                <div className='ml-4 col-md-1 col-lg-1'>
                                    <img src="/images/logo.png" alt="" className='imgex' />
                                </div>
                                <div className='ml-4 displayblock col-md-4'>
                                    <p><TbHandClick />One More Click</p>
                                    <p><AiOutlineCamera />photoGrapher</p>
                                    <p><CiLocationOn />Madhya Pradesh</p>
                                </div>
                            </div> */}
                            <div>
                                <div className='col-md-12'>
                                    <div className="container-fluid boxfrom">
                                        <form className="row d-flex align-item-center justify-content-center flex-column">
                                            <div className="row mb-5">
                                                <div className="">
                                                    <label htmlFor="exampleInputEmail1" className="form-label mt-4 ">Email address</label>
                                                    <input type="email" className="p-4 form-control emails" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="row mb-5">
                                                    <div className="mb-3 col-md-6">
                                                        <label htmlFor="exampleInputPassword1" className="form-label">Current Password</label>
                                                        <input type="password" className="form-control p-4 emails" id="exampleInputPassword1" />
                                                    </div>

                                                    <div className="mb-3 col-md-6">
                                                        <label htmlFor="exampleInputPassword1" className="form-label">New Password</label>
                                                        <input type="password" className="form-control p-4 emails" id="exampleInputPassword1" />
                                                    </div>
                                                </div>

                                                <div className="mb-5">
                                                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm New Password</label>
                                                    <input type="password" className="form-control p-4 emails" id="exampleInputPassword1" />
                                                </div>
                                                <div className="">
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

export default SoundResetPassDashBoard;
