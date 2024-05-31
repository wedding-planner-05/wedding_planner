import { FaEnvelope, FaPhoneAlt, FaStar, FaWhatsapp } from "react-icons/fa";
import { FaIndianRupeeSign, FaLocationDot } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import AboutUs from "../../Components/AboutUs/AboutUs";
import "./SoundVendorDetails.css";
import * as React from "react";
import Box from "@mui/material/Box";
import { Rating, Typography } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "../../Components/Footer/Footer";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import axios from "axios";
import RatingReview from "../../Components/Rating/RatingReview";

const SoundVendorDetails = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const location = useLocation();

  const data = location.state;
  console.log('vendor is ', data);
  const [userId, setUserId] = React.useState(sessionStorage.getItem("userID"));
  const [name, setUserName] = React.useState(sessionStorage.getItem("userName"));
  const [comment, setComment] = React.useState();
  const [reviewadd, setReviwAdd] = React.useState([]);
  const [vendorId, setId] = React.useState(data.vendorId);
  const [showContact, setShowContact] = React.useState(false);
  const [catalogimage, setCatalogimage] = React.useState([]);
  const [showEmail, setShowEmail] = React.useState(false);

  React.useEffect(() => {
    axios.get(`http://localhost:3000/sound/sound/reviewdata/${vendorId}`)
      .then((result) => {
        console.log("review data", result.data.data);
        setReviwAdd(result.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [vendorId]);

  React.useEffect(() => {
    axios.get(`http://localhost:3000/sound/sound/catalogImages/${vendorId}`)
      .then(result => {
        console.log("this is real data", result.data);
        let imageArray = result.data[0].images.split(" ");
        imageArray.shift();
        console.log("this is images remove", imageArray);
        setCatalogimage(imageArray);
      })
      .catch(error => {
        console.log("this is error", error);
      });
  }, [vendorId, userId]);

  const submitReview = (rating) => {
    alert("hello");
    axios.post("http://localhost:3000/sound/sound/review", {
      vendorId,
      userId,
      name,
      rating,
      comment,
    }).then((result) => {
      setReviwAdd([result.data.data, ...reviewadd]);
    }).catch((error) => {
      console.log(error);
    });
  };

  const showName = (value) => {
    console.log(value);
    if (!isAuthenticated) {
      Swal.fire({
        title: "Please LogIn First",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "  Ok  ",
      }).then((result) => {
        if (result.isConfirmed) {
          loginWithRedirect();
        }
      });
    } else if (value === "contact") {
      setShowContact(!showContact);
      setShowEmail(false);
    } else if (value === "email") {
      setShowEmail(!showEmail);
      setShowContact(false);
    }
  };

  const message = "Hello, I'm interested in your services.And I want to Book a Garden";
  const email = "wedding.planner.techwizards@gmail.com";
  const subject = "Request for Garden Booking";
  const body = `My name is , and I am writing to inquire about the availability of your Sound/DJ for an event we are planning.`;
  const url = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${email}&su=${subject}&body=${encodeURIComponent(body)}`;

  return (
    <>
      <div className="container">
        <div className="hello2">
          <div className="row  justify-content-center mt-5 pt-5 pb-5">
            <div className="col-md-6 col-lg-4 position-relative mb-5">
              <div>
                <img
                  className="zoom-img img-fluid"
                  src={data.imageUrl.startsWith("images") ? `http://localhost:3006/${data.imageUrl}` : data.imageUrl}
                  alt="image not available"
                />
              </div>
              <div className="position-absolute  block-details-1 p-3 mb-4 start-50 top-100 translate-middle">
                <h5>{data.name}</h5>
                <h5>Rating: {data.rating}</h5>
                <small>
                  <FaLocationDot color="green" />
                  {data.address}
                </small>
                <br />
              </div>
            </div>

            <div className="col-md-6 col-lg-5 d-flex flex-column custom-label-size mt-4">
              <div className="custom-label mb-3 p-2">Starting packages</div>
              <div className="custom-label mb-3 p-2">
                <FaIndianRupeeSign /> {data.serviceCharge}
              </div>
              <div className="d-flex justify-content-evenly position-relative">
                <button onClick={() => showName("contact")} className="btn btn-success rounded-5 px-3">
                  <FaPhoneAlt /> Contact
                </button>
                {showContact && (
                  <div className="contact-div p-1">
                    <ul className="d-flex flex gap-2 p-1">
                      <li>
                        <FaPhoneAlt color="blue" />
                        <strong>
                          <Link style={{ textDecoration: "none" }} to={"tel:+91 93023 18373"}>
                            {data.contactNo}
                          </Link>
                        </strong>
                      </li>
                      <li>
                        <strong>
                          <Link
                            to={`https://wa.me/91${data.contactNo}?text=${encodeURIComponent(message)}`}
                            target="_blank"
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <FaWhatsapp color="green" /> {data.contactNo}
                          </Link>
                        </strong>
                      </li>
                    </ul>
                  </div>
                )}
                <button className="btn btn-danger rounded-5 px-4" onClick={() => showName("email")}>
                  {isAuthenticated ? (
                    <Link to={url} target="_blank" style={{ textDecoration: "none", color: "white" }}>
                      <FaEnvelope /> Email
                    </Link>
                  ) : (
                    <FaEnvelope />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="mt-5" style={{ border: "1px solid black", height: "25rem", padding: "2rem", display: "flex", paddingLeft: "1rem" }}>
            {catalogimage.length > 0 ? (
              catalogimage.map((item, index) => (
                <img
                  key={index}
                  src={`http://localhost:3006/images/${item}`}
                  alt={`Catalog ${index}`}
                  style={{ width: '25rem', height: '15rem', border: "1px solid black", paddingLeft: "1rem" }}
                />
              ))
            ) : (
              <p>No images available</p>
            )}
          </div>
          <div className="container custom-border mt-5 p-5 d-flex flex-wrap">
            <div>{data.description}</div>
          </div>
        </div>
      </div>
      <AboutUs />
      <Footer />
    </>
  );
};

export default SoundVendorDetails;
