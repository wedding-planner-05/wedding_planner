import React, { useEffect, useState } from "react";
import { RxDashboard } from "react-icons/rx";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { RiLockPasswordLine } from "react-icons/ri";
import { RiContactsLine } from "react-icons/ri";
import { CgList } from "react-icons/cg";
import { AiOutlineSetting } from "react-icons/ai";
// import Avatar from 'react-avatar';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import "./DashBord.css";
import Navbar from "../../Components/Navbar/Navbar";
import axios from "axios";
import Swal from "sweetalert2";
import { CgProfile } from "react-icons/cg";
import swal from "sweetalert";

function GardenHomeDetailsDashBoard() {
  const [file, setFile] = useState(null);
  // const  {id, name, location, capacity, contactNo, rentalFee, description } = 
  
  const [id,setVendorId] = useState('') ;
  const [name,setName] = useState('')
  const [type ,setType] =  useState('') 
  const [image,setImage] =  useState(null)
  const [serviceCharge,setServiceCharge] =  useState('')
  const [location,setLocation] =  useState('')
  const [ description,setDescription] =  useState('')
  const [ contactNo,setContact] =  useState('')

  console.log(id , name , type, serviceCharge , location , description , contactNo);
  useEffect(()=>{
    setType(sessionStorage.getItem('caterType')) ;
    setVendorId(sessionStorage.getItem('userID')) ;
},[])



const handleSubmit = (e)=>{
  alert('hello')
  e.preventDefault()
  const formData = new FormData()
  formData.append('gardenId',id)
  formData.append('name',name)
  formData.append('type',type)
  formData.append('image',image)
  formData.append('price',serviceCharge)
  formData.append('location',location)
  formData.append('description',description)
  formData.append('contactNo',contactNo)

  console.log('hello---3');

  axios.post("http://localhost:3000/garden/garden/createProfile", formData, {
      headers: {
          "Content-Type": "multipart/form-data"
      }
  }).then(result => {
      console.log(result.data.data);
      Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Profile created successfully!'
      });
  }).catch(err => {
      console.log(err);
      Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Something went wrong while creating the profile.'
      });
  });

  console.log('hellokjskj');
}

function handleFileChange(event) {
  const imagePath = event.target.files[0];
  console.log( 'image is : ',imagePath);
  setImage(imagePath);
}

  // function handleFileChange(event) {
  //   const selectedFile = event.target.files[0];
  //   setFile(selectedFile);
  // }

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row ">
          <div className="col-md-3 col-lg-2  asidebar">
            <div>
              <ul className="list-unstyled">
                <li>
                  <Link to="/GardenProfile">
                    <strong style={{ color: "black" }}>
                      <CgList />
                    </strong>
                    <span style={{ color: "black" }}>Profile</span>
                  </Link>
                </li>
                <li>
                  <Link to="/GardenHomeDetailsDashBoard" className="textnone">
                    <strong style={{ color: "black" }}>
                      <RxDashboard />
                    </strong>
                    <span style={{ color: "black" }}>Dashboard</span>
                  </Link>
                </li>
                {/* <li>
                  <Link to="/GardenResetPassDashBoard" className="textnone">
                    <strong style={{ color: "black" }}>
                      <RiLockPasswordLine />
                    </strong>
                    <span style={{ color: "black" }}>Password</span>
                  </Link>
                </li> */}
                <li>
                  <Link to="/GardenContactDashBoard" className="textnone">
                    <strong style={{ color: "black" }}>
                      <RiContactsLine />
                    </strong>
                    <span style={{ color: "black" }}>Contact-Us</span>
                  </Link>
                </li>
                <li>
                  <Link>
                  <strong style={{ color: "black" }}>
                    <AiOutlineSetting />
                  </strong>
                  <span className="btn" style={{ color: "black" }} onClick={()=>{ swal("Coming Soon", "Working on that", "info")}}>Setting</span>
                
                  </Link>  
                </li>
              </ul>
            </div>
          </div>
          <div className="col content  boxborder">
            <div>
              <h1 className="mb-5">WelCome Garden's</h1>
              <h3 className="mt-3"><CgProfile className="mr-4"/>Create your Profile here</h3>
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
                          <div className="mb-3 col">
                            <label
                              htmlFor="exampleInputPassword1"
                              className="form-label"
                            >
                              Description
                            </label>
                            <input
                              onChange={(e)=>setDescription(e.target.value)}
                              type="text"
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
                            onChange={(e)=>setLocation(e.target.value)}
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

export default GardenHomeDetailsDashBoard;
