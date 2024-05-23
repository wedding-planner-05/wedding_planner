import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { RxDashboard } from "react-icons/rx";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { RiLockPasswordLine, RiContactsLine } from "react-icons/ri";
import { CgList } from "react-icons/cg";
import { AiOutlineSetting, AiOutlineCamera } from "react-icons/ai";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import "./DashBord.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

function CaterProfile() {
    const [file, setFile] = useState(null);
    const [name, setName] = useState("");
    const [serviceCharge, setServiceCharge] = useState("");
    const [email, setEmail] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [location, setLocation] = useState("");
    const [profile, setProfile] = useState({});

    const userID = sessionStorage.getItem("userID");
    const userEmail = sessionStorage.getItem("email");

    useEffect(() => {
        if (userID) {
            axios.get(`http://localhost:3000/cater/cater/viewprofile/${userID}`).then(result => {
                setProfile(result.data.data);
                console.log(result.data.data);
                if (result.data.data) {
                    const { title, price, contactNo } = result.data.data;
                    setName(title);
                    setServiceCharge(price);
                    setContactNo(contactNo);
                    setEmail(userEmail);
                }
            }).catch(error => {
                console.error(error);
            });
        }
    }, [userID, userEmail]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", { name, serviceCharge, email, contactNo, location, file });
        toast.success("Profile updated successfully!");
    };

    return (
        <>
            <ToastContainer />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-lg-2 asidebar">
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
                                    <Link to="/CaterHomeDetailsDashBoard" className="textnone">
                                        <strong style={{ color: "black" }}>
                                            <RxDashboard />
                                        </strong>
                                        <span style={{ color: "black" }}>Dashboard</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/CaterResetPassDashBoard" className="textnone">
                                        <strong style={{ color: "black" }}>
                                            <RiLockPasswordLine />
                                        </strong>
                                        <span style={{ color: "black" }}>Password</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/CaterContactDash" className="textnone">
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
                                    <span style={{ color: "black" }}>Setting</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col content boxborder">
                        <div>
                            <h1>Welcome CaterProfile</h1>
                            <hr />
                            <div className="col-md-12">
                                <div className="container-fluid boxfrom">
                                    <form className="row d-flex align-items-center justify-content-center flex-column" onSubmit={handleSubmit}>
                                        {/* <div className="mb-3 row text-center">
                                            <img src="" alt="Profile" className='imagesprofile text-center content-center' />
                                        </div> */}
                                        <div className="row mt-5">
                                            <div className="mb-3 col">
                                                <label htmlFor="name" className="form-label">Name</label>
                                                <input
                                                    onChange={(e) => setName(e.target.value)}
                                                    type="text"
                                                    className="form-control p-4 emails logosforinput"
                                                    id="name"
                                                    value={profile.name}
                                                />
                                            </div>
                                            <div className="mb-3 col">
                                                <label htmlFor="serviceCharge" className="form-label">Service Charge</label>
                                                <input
                                                    onChange={(e) => setServiceCharge(e.target.value)}
                                                    type="text"
                                                    className="form-control p-4 emails"
                                                    id="serviceCharge"
                                                    value={profile.servicecharge}
                                                />
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="mb-3">
                                                <label htmlFor="email" className="form-label">Email Address</label>
                                                <input
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    type="email"
                                                    className="form-control p-4 emails"
                                                    id="email"
                                                    value={email}
                                                />
                                            </div>
                                            <hr />
                                            <div className="mb-3 col">
                                                <label htmlFor="contactNo" className="form-label">Phone Number</label>
                                                <input
                                                    onChange={(e) => setContactNo(e.target.value)}
                                                    type="text"
                                                    className="form-control p-4 emails"
                                                    id="contactNo"
                                                    value={profile.contactno}
                                                />
                                            </div>
                                            <div className="mb-3 col">
                                                <label htmlFor="contactNo" className="form-label">Location</label>
                                                <input
                                                    onChange={(e) => setContactNo(e.target.value)}
                                                    type="text"
                                                    className="form-control p-4 emails"
                                                    id="contactNo"
                                                    value={profile.location}
                                                />
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="d-flex justify-content-center">
                                            <button type="reset" className="btn btn-info m-3">Update</button>
                                            <button type='submit' className="btn btn-block mt-4 pt-3 pb-3 col-md-4" style={{ fontSize: "1.2rem", fontWeight: "bolder", background: "#D5133A", borderRadius: "2rem", color: "white" }}>Submit</button>
                                            {/* <button type="button" className="btn btn-warning m-3">Save</button> */}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CaterProfile;