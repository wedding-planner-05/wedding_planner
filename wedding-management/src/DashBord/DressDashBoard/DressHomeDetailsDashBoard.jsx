import React, { useEffect, useState } from "react";
import { RxDashboard } from "react-icons/rx";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { RiLockPasswordLine } from "react-icons/ri";
import { RiContactsLine } from "react-icons/ri";
import { CgList } from "react-icons/cg";
import { AiOutlineSetting } from "react-icons/ai";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import "./DashBord.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function SoundHomeDetailsDashBoard() {
  const [id, setVendorId] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [image, setImage] = useState(null);
  const [serviceCharge, setServiceCharge] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [contactNo, setContact] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setType(sessionStorage.getItem('caterType'));
    setVendorId(sessionStorage.getItem('userID'));
  }, []);

  function handleFileChange(event) {
    const imagePath = event.target.files[0];
    setImage(imagePath);
  }

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!serviceCharge) newErrors.serviceCharge = "Service Charge is required";
    if (!contactNo) newErrors.contactNo = "Contact No. is required";
    if (!address) newErrors.address = "Address is required";
    if (!description) newErrors.description = "Description is required";
    if (!image) newErrors.image = "Image is required";
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fill out all required fields");
      return;
    }

    const formData = new FormData();
    formData.append("id", id);
    formData.append("name", name);
    formData.append("address", address);
    formData.append("image", image);
    formData.append("servicecharge", serviceCharge);
    formData.append("type", type);
    formData.append("contactno", contactNo);
    formData.append("description", description);

    axios.post("http://localhost:3000/dress/dress/createProfile", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then(result => {
      toast.success("Data entered successfully");
    }).catch(err => {
      toast.error("Something went wrong");
    });
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
                  <Link to="/DressProfile">
                    <strong style={{ color: "black" }}>
                      <CgList />
                    </strong>
                    <span style={{ color: "black" }}>Profile</span>
                  </Link>
                </li>
                <li>
                  <Link to="/DressHomeDetailsDashBoard" className="textnone">
                    <strong style={{ color: "black" }}>
                      <RxDashboard />
                    </strong>
                    <span style={{ color: "black" }}>Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link to="/DressResetPassDashBoard" className="textnone">
                    <strong style={{ color: "black" }}>
                      <RiLockPasswordLine />
                    </strong>
                    <span style={{ color: "black" }}>Password</span>
                  </Link>
                </li>
                <li>
                  <Link to="/DressContactDashBoard" className="textnone">
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
              <h1>Welcome DJ'S</h1>
              <hr />
              <div>
                <div className="col-12">
                  <div className="container-fluid boxfrom">
                    <form className="row d-flex align-item-center justify-content-center flex-column">
                      <div className="row">
                        <div className="mb-3 col-6">
                          <label htmlFor="name" className="form-label">
                            Name
                          </label>
                          <input
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            className="form-control p-4 emails"
                            id="name"
                          />
                          {errors.name && <span className="text-danger">{errors.name}</span>}
                        </div>
                        <div className="mb-3 col-6">
                          <label htmlFor="serviceCharge" className="form-label">
                            Service Charge
                          </label>
                          <input
                            onChange={(e) => setServiceCharge(e.target.value)}
                            type="number"
                            className="form-control p-4 emails"
                            id="serviceCharge"
                          />
                          {errors.serviceCharge && <span className="text-danger">{errors.serviceCharge}</span>}
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="mb-3 col-6">
                          <label htmlFor="contactNo" className="form-label">
                            Contact No.
                          </label>
                          <input
                            onChange={(e) => setContact(e.target.value)}
                            type="text"
                            className="form-control p-4 emails"
                            id="contactNo"
                          />
                          {errors.contactNo && <span className="text-danger">{errors.contactNo}</span>}
                        </div>
                        <div className="mb-3 col-6">
                          <label htmlFor="type" className="form-label">
                            Type
                          </label>
                          <input
                            value={type}
                            type="text"
                            className="form-control p-4 emails"
                            id="type"
                            readOnly
                          />
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="mb-3 col">
                          <label htmlFor="email" className="form-label">
                            Email Address
                          </label>
                          <input
                            value={sessionStorage.getItem('email')}
                            type="email"
                            className="form-control p-4 emails"
                            id="email"
                            readOnly
                          />
                        </div>
                        <div className="mb-3 col">
                          <label htmlFor="description" className="form-label">
                            Description
                          </label>
                          <input
                            onChange={(e) => setDescription(e.target.value)}
                            type="text"
                            className="form-control p-4 emails"
                            id="description"
                          />
                          {errors.description && <span className="text-danger">{errors.description}</span>}
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="mb-3 col-6">
                          <label htmlFor="address" className="form-label">
                            Location
                          </label>
                          <select
                            onChange={(e) => setAddress(e.target.value)}
                            className="form-control p-4 emails"
                            id="address"
                            defaultValue=""
                          >
                            <option value="" disabled>Choose Location</option>
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
                          {errors.address && <span className="text-danger">{errors.address}</span>}
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="image" className="form-label">
                            Upload Image
                          </label>
                          <input
                            type="file"
                            onChange={handleFileChange}
                            className="form-control p emails"
                            id="image"
                          />
                          {errors.image && <span className="text-danger">{errors.image}</span>}
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="d-flex justify-content-center">
                          <div className="">
                            <button type="button" className="btn btn-info m-3">
                              Reset
                            </button>
                          </div>
                          <div className="">
                            <button
                              type="submit"
                              className="btn btn-warning m-3"
                              onClick={(e) => handleSubmit(e)}
                            >
                              Save
                            </button>
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
