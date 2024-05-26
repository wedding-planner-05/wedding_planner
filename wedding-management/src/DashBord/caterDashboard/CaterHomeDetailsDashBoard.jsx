import React, { useEffect, useState } from "react";
import { RxDashboard } from "react-icons/rx";
import "bootstrap/dist/css/bootstrap.min.css";
import { RiLockPasswordLine, RiContactsLine } from "react-icons/ri";
import { CgList } from "react-icons/cg";
import { AiOutlineSetting } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./DashBord.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import Swal from "sweetalert2";

function CaterHomeDetailsDashBoard() {
  const [file, setFile] = useState(null);
  const [id, setVendorId] = useState('');
  const [name, setName] = useState("");
  const [servicecharge, setServicecharge] = useState("");
  const [email, setEmail] = useState("");
  const [contactno, setContactno] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const userId = sessionStorage.getItem('userID');
    setVendorId(userId);
    console.log(userId, "this is id of cater");
  }, []);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("loginUserId", id);
    formData.append("file", file);
    formData.append("name", name);
    formData.append("servicecharge", servicecharge);
    formData.append("email", email);
    formData.append("contactno", contactno);
    formData.append("location", location);

    axios.post("http://localhost:3000/cater/cater/addformdetails", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then(result => {
      toast.success("data upload succesfully")
      console.log("Data entered successfully", result);
    }).catch(err => {
      console.log(name, servicecharge, email, contactno, location, file, "this is data");
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'please enter all details',
      });
      console.log("Error:", err);
    });
  };

  return (
    <>
      <ToastContainer />
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
                  <Link to="/CaterHomeDetailsDashBoard" className="textnone">
                    <strong style={{ color: "black" }}>
                      <RxDashboard />
                    </strong>
                    <span style={{ color: "black" }}>Dashboard</span>
                  </Link>
                </li>
                {/* <li>
                  <Link to="/CaterResetPassDashBoard" className="textnone">
                    <strong style={{ color: "black" }}>
                      <RiLockPasswordLine />
                    </strong>
                    <span style={{ color: "black" }}>Password</span>
                  </Link>
                </li> */}
                {/* <li>
                  <Link to="/CaterContactDash" className="textnone">
                    <strong style={{ color: "black" }}>
                      <RiContactsLine />
                    </strong>
                    <span style={{ color: "black" }}>Contact-Us</span>
                  </Link>
                </li> */}
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
              <h1>Welcome Cater's</h1>
              <hr />
              <div className="col-md-12">
                <div className="container-fluid boxfrom">
                  <form className="row d-flex align-item-center justify-content-center flex-column" onSubmit={handleSubmit}>
                    <div className="row mt-5">
                      <div className="mb-3 col">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input onChange={(e) => setName(e.target.value)} type="text" className="form-control p-4 emails logosforinput" id="name" />
                      </div>
                      <div className="mb-3 col">
                        <label htmlFor="servicecharge" className="form-label">Service Charge</label>
                        <input onChange={(e) => setServicecharge(e.target.value)} type="text" className="form-control p-4 emails" id="servicecharge" />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control p-4 emails" id="email" />
                      </div>
                      <hr />
                      <div className="mb-3 col">
                        <label htmlFor="contactno" className="form-label">Phone Number</label>
                        <input onChange={(e) => setContactno(e.target.value)} type="text" className="form-control p-4 emails" id="contactno" />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="mb-3 col-md-6">
                        <label htmlFor="location" className="form-label">Location</label>
                        <select onChange={(e) => setLocation(e.target.value)} name="location" id="location" style={{ border: "none", width: "100%", height: "2.9rem", boxShadow: "0 0 0.5rem black", borderRadius: ".5rem" }}>
                          <option value="">Choose Location</option>
                          <option value="Vijay Nagar, Indore">Vijay Nagar, Indore</option>
                          {/* Add more options as needed */}
                        </select>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label htmlFor="file" className="form-label">Upload Image</label>
                        <input type="file" className="form-control p-4 emails" id="file" onChange={handleFileChange} />
                      </div>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-center">
                      <button type="submit" className="btn btn-block mt-4 pt-3 pb-3" style={{ fontSize: "1.2rem", fontWeight: "bolder", background: "#D5133A", borderRadius: "2rem", color: "white" }}>Submit</button>
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

export default CaterHomeDetailsDashBoard;

