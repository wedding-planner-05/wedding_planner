import React from "react";
import "./AboutUs.css";
import { FaHeartPulse } from "react-icons/fa6";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaPhoneAlt,
} from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="about-us container mt-5 mb-5" id="AboutUs">
      <div className="text-center">
        <h4 className="" style={{ color: "crimson" }}>
          About us
        </h4>
        <span className="custom-icons" style={{ color: "crimson" }}>
          ___________
          <FaHeartPulse />
          ___________
        </span>
      </div>
      <div
        className="row d-flex justify-content-around  py-2 m-1"
        style={{
          borderTop: "0px solid ",
          borderBottom: "35px solid crimson",
          borderLeft: "20px solid crimson",
          borderRight: "20px solid crimson",
        }}
      >
        <div className="p-5">
          <p>
            A wedding planner website is a digital platform designed to assist
            couples in organizing their wedding. It typically offers a variety
            of tools and resources such as: Planning Tools: Checklists,
            timelines, and budget trackers to help manage every aspect of the
            wedding. Vendor Directories: Listings and reviews of local vendors
            including photographers, florists, caterers, and venues. Inspiration
            and Ideas: Galleries of wedding themes, decor ideas, and real
            wedding stories for inspiration. Customization Options: Features for
            creating personalized wedding websites, invitations, and RSVPs.
            Guest Management: Tools to manage guest lists, seating arrangements,
            and communication with guests. Expert Advice: Blogs, articles, and
            Q&A sections with tips from wedding planning professionals.
          </p>
        </div>
        {/* <div className="px-5 col-md-6 p-4 d-flex">
          <img
            className="img-fluid custom-imgs "
            src="images/p6.webp"
            alt="Image not display"
          />
        </div> */}
      </div>
    </div>
  );
};

export default AboutUs;
