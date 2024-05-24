import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function SoundHomeDetailsDashBoard() {


  const [id,setVendorId] = useState('') ;
  const [name,setName] = useState('')
  const [type ,setType] =  useState('') 
  const [image,setImage] =  useState(null)
  const [serviceCharge,setServiceCharge] =  useState('')
  const [address,setAddress] =  useState('')
  const [ description,setDescription] =  useState('')
  const [ contactNo,setContact] =  useState('')
  console.log('vendor Id : ',id)

  console.log('image url ',image);
  console.log(id , name , type  , serviceCharge , address , description , contactNo);

  useEffect(()=>{
      setType(sessionStorage.getItem('caterType')) ;
      setVendorId(sessionStorage.getItem('userID')) ;
  },[])

  function handleFileChange(event) {
    const imagePath = event.target.files[0];
    console.log( 'image is : ',imagePath);
    setImage(imagePath);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("id", id)
    formData.append("image", image);
    formData.append("name", name);
    formData.append("serviceCharge", serviceCharge);
    formData.append("type", type);
    formData.append("contactno", contactNo);
    formData.append("address", address);
    formData.append("description", description);
    // formData.append("rating", rating);

    axios.post("http://localhost:3000/sound/sound/createProfile", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then(result => {
      toast.success("Data entered successfully")
      console.log("Data entered successfully", result);
      console.log(id, image, name, serviceCharge, type, contactNo, address, description,"this is data");

    }).catch(err => {

      console.log(loginUserId, file, name, serviceCharge, type, contactno, address, description, rating, "this is data");
      toast.error("Something went wrong");
      console.log("Error:", err);

    });
  }

  return (
    <>
    <ToastContainer />

      <div className="container-fluid">
        <div className="row ">
          <div className="col-md-3 col-lg-2  asidebar">
            <div>
              <ul className="list-unstyled">
                <li>
                  <Link to="/SoundProfile">
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
                  <span style={{ color: "black" }}>Setting</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col content  boxborder">
            <div>
              <h1>WelCome DJ'S</h1>
              <hr />
              <div>
                <div className="col-md-12">
                  <div className="container-fluid boxfrom">
                    <form className="row d-flex align-item-center justify-content-center flex-column">
                      <div
                        className="row"
                        style={{ border: "5px solir green" }}
                      >
                        <div className="row ">
                          <div className="mb-3 col">
                            <label
                              htmlFor="exampleInputPassword1"
                              className="form-label"
                            >
                              Name
                            </label>
                            <input
                              type="text"
                              onChange={(e)=>setName(e.target.value)}
                              className="form-control p-4 emails"
                              id="exampleInputPassword1"
                            />
                          </div>

                          <div className="mb-3 col">
                            <label
                              htmlFor="exampleInputPassword1"
                              className="form-label"
                            >
                              Service Charge
                            </label>
                            <input
                              onChange={(e)=>setServiceCharge(e.target.value)}
                              type="text"
                              className="form-control p-4 emails"
                              id="exampleInputPassword1"
                            />
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                         

                          <div className="mb-3 col-6">
                            <label
                              htmlFor="exampleInputPassword1"
                              className="form-label"
                            >
                              Contact No.
                              </label>
                            <input
                              onChange={(e)=>setContact(e.target.value)}
                              type="text"
                              className="form-control p-4 emails"
                              id="exampleInputPassword1"
                            />
                          </div>
                          <div className="mb-3 col-6">
                            <label value={sessionStorage.getItem('caterType')}
                              htmlFor="exampleInputPassword1"
                              className="form-label"
                            >Type
                            </label>
                            <input
                              value={type}
                              type="text"
                              className="form-control p-4 emails"
                              id="exampleInputPassword1"
                            />
                          </div>
                        </div>
                        <hr />

                        <div className="row">
                          <div className="mb-3 col">
                            <label
                              htmlFor="exampleInputPassword1"
                              className="form-label"
                            >
                              Email Address
                            </label>
                            <input
                              value={sessionStorage.getItem('email')}
                              type="email"
                              className="form-control p-4 emails"
                              id="exampleInputPassword1"
                            />
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div cla  ssName="mb-3">
                            <label
                              htmlFor="exampleInputPassword1"
                              className="form-label"
                            >
                              Location
                            </label>
                            <br />
                            <select className="col-6  p-1"
                            onChange={(e)=>setAddress(e.target.value)}
                              name="select"
                              style={{
                                borderColor:'grey',
                                height: "2.9rem",
                                borderRadius: ".5rem",
                              }}
                            >
                              <option value="">Choose Location</option>
                              <option value="Vijay Nagar, Indore">
                                Vijay Nagar, Indore
                              </option>
                              <option value="Bhawarkua, Indore">
                                Bhawarkua, Indore
                              </option>
                              <option value="Rajwada, Indore">
                                Rajwada, Indore
                              </option>
                              <option value="Palasia, Indore">
                                Palasia, Indore
                              </option>
                              <option value="Tilak Nagar, Indore">
                                Tilak Nagar, Indore
                              </option>
                              <option value="Sudama Nagar, Indore">
                                Sudama Nagar, Indore
                              </option>
                              <option value="Pardesipura, Indore">
                                Pardesipura, Indore
                              </option>
                              <option value="Bengali Square, Indore">
                                Bengali Square, Indore
                              </option>
                              <option value="Rau, Indore">Rau, Indore</option>
                              <option value="MR 10 Road, Indore">
                                MR 10 Road, Indore
                              </option>
                              <option value="Mahalaxmi Nagar, Indore">
                                Mahalaxmi Nagar, Indore
                              </option>
                              <option value="Navlakha, Indore">
                                Navlakha, Indore
                              </option>
                              <option value="Annapurna, Indore">
                                Annapurna, Indore
                              </option>
                              <option value="Lokmanya Nagar, Indore">
                                Lokmanya Nagar, Indore
                              </option>
                              <option value="Snehnagar, Indore">
                                Snehnagar, Indore
                              </option>
                              <option value="Scheme No. 54, Indore">
                                Scheme No. 54, Indore
                              </option>
                              <option value="Scheme No. 74, Indore">
                                Scheme No. 74, Indore
                              </option>
                              <option value="Sukhliya, Indore">
                                Sukhliya, Indore
                              </option>
                              <option value="Nipania, Indore">
                                Nipania, Indore
                              </option>
                              <option value="Airport Road, Indore">
                                Airport Road, Indore
                              </option>
                            </select>
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              htmlFor="exampleInputPassword1"
                              className="form-label"
                            >
                              Upload Image
                            </label>
                            <input
                              type="file"
                              onChange={handleFileChange}
                              className="form-control p emails"
                              id="exampleInputPassword1"
                              // onChange={handleFileChange}
                            />
                          </div>
                        </div>
                        <hr />


                        <div className="row">
                          <div className="d-flex justify-content-center">
                            <div className="">
                              <button
                                type="button"
                                className="btn btn-info m-3"
                              >
                                Reset
                              </button>
                            </div>
                            <div className="">
                              <button
                                type="button"
                                className="btn btn-warning m-3"
                                onClick={(e)=>handleSubmit(e)}
                              >
                                Save
                              </button>
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
      </div>
    </>
  );
}

export default SoundHomeDetailsDashBoard;
