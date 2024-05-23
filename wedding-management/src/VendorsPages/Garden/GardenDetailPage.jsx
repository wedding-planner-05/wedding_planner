import { FaEnvelope, FaPhoneAlt, FaStar, FaWhatsapp } from "react-icons/fa";
import { FaIndianRupeeSign, FaLocationDot } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import AboutUs from "../../Components/AboutUs/AboutUs";
// import "./SoundVendorDetails.css"
import { FaUserAlt } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import * as React from 'react'
import Box from '@mui/material/Box'
import { Rating } from '@mui/material'
import { Typography } from '@mui/material'
import { useAuth0 } from '@auth0/auth0-react';
import Footer from '../../Components/Footer/Footer';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";

const GardenDetailPage = () => {
  const { isAuthenticated, loginWithRedirect ,user} = useAuth0();
//   console.log(user);
  const location = useLocation();
  const data = location.state;
  console.log(data);

  const [show, setShow] = React.useState(false);
  const [value, setValue] = React.useState(2);
  console.log(value);

  const showName = () => {
    if (!isAuthenticated) {
      const result = window.confirm("please singn In first");
      if (result) loginWithRedirect();
    } else {
      if (show == true) setShow(false);
      else {
        setShow(isAuthenticated);
      }
    }
  };

  const message =
    "Hello, I'm interested in your services.And I want to Book a Garden";

  const email = "wedding.planner.techwizards@gmail.com";
  const subject = "Request for Garden Booking";
  const body = `My name is , and I am writing to inquire about the availability of your garden for an event we are planning.

We are interested in booking the garden for a [type of event, e.g., wedding, birthday party, corporate event] on [event date]. Below are the details of the event:

- Date: [Event Date]
- Time: [Start Time] to [End Time]
- Number of Guests: [Estimated Number of Guests]
- Event Requirements:
  - Seating arrangements for [number of guests]
  - Decoration permissions and guidelines
  - Catering facilities and restrictions (if any)
  - Availability of electricity and lighting
  - Parking facilities
- Any additional charges or policies we should be aware of

We are particularly drawn to your venue because of [reason, e.g., its beautiful landscaping, convenient location, positive reviews]. We believe it would be the perfect setting for our event.

Could you please provide information on the availability of the garden on the specified date and a detailed quote for the booking? Additionally, we would appreciate it if you could share any terms and conditions related to the booking process.

If possible, we would like to schedule a visit to the garden to discuss the details in person and to see the venue firsthand. Please let us know a convenient time for you.

Thank you for your time and assistance. We look forward to your response.

Best regards,

[Your Full Name]
`;

  console.log(body);

  // const encodedMessage = encodeURIComponent(message);

  console.log("body ", body);
  return (
    <>
      {/* <Navbar/> */}
      <div className="container">
        <div className="hello2">
          <div className="row  justify-content-center mt-5 pt-5 pb-5">
            <div className=" col-md-6 col-lg-4 position-relative mb-5">
              <div>
                <img
                  className="zoom-img img-fluid"
                  src={`http://localhost:3003/`+ data.imageUrl}
                  alt="image not available"
                />
              </div>

              <div className="position-absolute block-details-1 p-3 mb-4 start-50 top-100 translate-middle">
                <h5>{data.title}</h5>
                <small className="mb-5">
                  <FaStar color="green" />
                  {data.rating}
                </small>
                <br />
                <small>
                  <FaLocationDot color="green" />
                  {data.location}
                </small>{" "}
                <br />
              </div>
            </div>

            <div className="col-md-6 col-lg-5 d-flex flex-column custom-label-size mt-4">
              <div className="custom-label mb-3 p-2 " htmlFor="">
                Starting packages
              </div>
              <div className="custom-label mb-3 p-2" htmlFor="">
                <FaIndianRupeeSign />
                {data.price}
              </div>
              <div className="d-flex justify-content-evenly position-relative">
                <button
                  onClick={() => {
                    showName();
                  }}
                  className=" btn btn-success rounded-5 px-3"
                >
                  <FaPhoneAlt /> Contact
                </button>
                {
                  <div className="contact-div p-1">
                    <ul className="d-flex flex gap-2 p-1">
                      <li>
                        <FaPhoneAlt color="blue" />{" "}
                        <strong >
                        <Link style={{textDecoration:"none"}} to={"tel:+91 93023 18373"} >{data.contactNo}</Link>

                        </strong>
                      </li>
                      <li>
                        <strong>
                          <Link
                            to={`https://wa.me/91${
                              data && data.contactNo
                            }?text=${encodeURIComponent(message || "Hi...")}`}
                            target="_blank"
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            {" "}
                            <FaWhatsapp color="green" />{" "}
                            {data && data.contactNo}{" "}
                          </Link>
                        </strong>
                      </li>
                    </ul>

                    <div className="d-flex gap-3 p-1 ">
                      {/* <IoIosCall /> */}
                    </div>
                  </div>
                }
                <button
                  style={{ width: "135px", height: "40px" }}
                  className="btn btn-danger rounded-5 px-3"
                >
                  <Link
                    to={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${email}&su=${subject}&body=${encodeURIComponent(
                      body
                    )}`}
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <FaEnvelope /> Email
                  </Link>
                </button>
              </div>
            </div>
            
          </div>
          <div className="container custom-border mt-5 p-5 d-flex flex-wrap">
            <div>{data.description}</div>
            <Box>
              <Typography component="legend"></Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
              />
            </Box>
          </div>
        </div>
      </div>
      <AboutUs />
      <Footer />
    </>
  );
};

export default GardenDetailPage;