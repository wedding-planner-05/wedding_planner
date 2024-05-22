import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { RiLockPasswordLine } from "react-icons/ri";
import { RiContactsLine } from "react-icons/ri";
import { CgList } from "react-icons/cg";
import { AiOutlineSetting } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { TbHandClick } from "react-icons/tb";
import { AiOutlineCamera } from "react-icons/ai";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import "./DashBord.css";
import Navbar from "../../Components/Navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

function CaterHomeDetailsDashBoard() {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [servicecharge, setServicecharge] = useState("");
  const [email, setEmail] = useState("");
  const [contactno, setContactno] = useState("");
  const [location, setLocation] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("servicecharge", servicecharge);
    formData.append("email", email);
    formData.append("contactno", contactno);
    formData.append("location", location);

    axios.post("http://localhost:3001/cater/addformdetails", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then(result => {
        toast.success("Data entered successfully")
        console.log("Data entered successfully", result);
    }).catch(err => {
        console.log(name, servicecharge, email, contactno, location, file, "this is data");
        toast.error("Something went wrong");
        console.log("Error:", err);
    });
}

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="container-fluid">
        <div className="row ">
          <div className="col-md-3 col-lg-2  asidebar">
            <div>
              <ul className="list-unstyled">
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
                    <CgList />
                  </strong>
                  <span style={{ color: "black" }}>Category-List</span>
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
          <div className="col content  boxborder">
            <div>
              <h1>WelCome Cater's</h1>
              <hr />
              <div>
                <div className="col-md-12">
                  <div className="container-fluid boxfrom">
                    <form className="row d-flex align-item-center justify-content-center flex-column" onSubmit={handleSubmit}>
                      <div className="row mt-5">
                        <div className="mb-3 col">
                          <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                          <input onChange={(e) => setName(e.target.value)} type="text" className="form-control p-4 emails logosforinput" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 col">
                          <label htmlFor="exampleInputPassword1" className="form-label">Service Charge</label>
                          <input onChange={(e) => setServicecharge(e.target.value)} type="text" className="form-control p-4 emails" id="exampleInputPassword1" />
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="mb-3">
                          <label htmlFor="exampleInputPassword1" className="form-label">Email Address</label>
                          <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control p-4 emails" id="exampleInputPassword1" />
                        </div>
                        <hr />
                        <div className="mb-3 col">
                          <label htmlFor="exampleInputPassword1" className="form-label">Phone Number</label>
                          <input onChange={(e) => setContactno(e.target.value)} type="text" className="form-control p-4 emails" id="exampleInputPassword1" />
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="mb-3 col-md-6">
                          <label htmlFor="exampleInputPassword1" className="form-label">Location</label>
                          <br />
                          <select onChange={(e) => setLocation(e.target.value)} name="select" id="" style={{ border: "none", width: "100%", height: "2.9rem", boxShadow: "0 0 0.5rem black", borderRadius: ".5rem" }}>
                            <option value="">Choose Location</option>
                            <option value="Vijay Nagar, Indore">Vijay Nagar, Indore</option>
                            <option value="Bhawarkua, Indore">Bhawarkua, Indore</option>
                            <option value="Rajwada, Indore">Rajwada, Indore</option>
                            <option value="Palasia, Indore">Palasia, Indore</option>
                            <option value="Tilak Nagar, Indore">Tilak Nagar, Indore</option>
                            <option value="Sudama Nagar, Indore">Sudama Nagar, Indore</option>
                            <option value="Pardesipura, Indore">Pardesipura, Indore</option>
                            <option value="Bengali Square, Indore">Bengali Square, Indore</option>
                            <option value="Rau, Indore">Rau, Indore</option>
                            <option value="MR 10 Road, Indore">MR 10 Road, Indore</option>
                            <option value="Mahalaxmi Nagar, Indore">Mahalaxmi Nagar, Indore</option>
                            <option value="Navlakha, Indore">Navlakha, Indore</option>
                            <option value="Annapurna, Indore">Annapurna, Indore</option>
                            <option value="Lokmanya Nagar, Indore">Lokmanya Nagar, Indore</option>
                            <option value="Snehnagar, Indore">Snehnagar, Indore</option>
                            <option value="Scheme No. 54, Indore">Scheme No. 54, Indore</option>
                            <option value="Scheme No. 74, Indore">Scheme No. 74, Indore</option>
                            <option value="Sukhliya, Indore">Sukhliya, Indore</option>
                            <option value="Nipania, Indore">Nipania, Indore</option>
                            <option value="Airport Road, Indore">Airport Road, Indore</option>
                          </select>
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="exampleInputPassword1" className="form-label">Upload Image</label>
                          <input type="file" className="form-control p-4 emails" id="exampleInputPassword1" onChange={handleFileChange} />
                        </div>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-center">
                        <div className="">
                          <button type="reset" className="btn btn-info m-3">Reset</button>
                        </div>
                        <button type='submit' className="btn btn-block mt-4 pt-3 pb-3" style={{ fontSize: "1.2rem", fontWeight: "bolder", background: "#D5133A", borderRadius: "2rem", color: "white" }}>Submit</button>
                        <div className="">
                          <button type="button" className="btn btn-warning m-3">Save</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CaterHomeDetailsDashBoard;
