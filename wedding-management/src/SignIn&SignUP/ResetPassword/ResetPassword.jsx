import { TextField } from "@mui/material";
import { IoIosGift } from "react-icons/io";
// import image from './d4d7c1b4-98c5-4859-836b-294d65cbd56c.be0ab837448c28bf10ffa8eb4955cdf8.webp'
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
// import Header from "./Header";
import { ToastContainer, toast } from "react-toastify";
import { Zoom } from "react-toastify";

export default function ResetPassword() {
  const location = useLocation();
  const { email, vendorType } = location.state;

  // console.log(email,"Email : ");

  // console.log(vendorType+" vendor Type");

  const [newpassword, setnewpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const navigate = useNavigate();

  const resetpassword = () => {
    if (validatePassword()) {
      if (newpassword === confirmpassword) {
        axios
          .post(`http://localhost:3000/${vendorType}/${vendorType}/update`, {
            email,newpassword,
          })
          .then(() => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Password Reset Successfully",
              showConfirmButton: false,
              timer: 3000,
            });
            navigate("/signin");
          })
          .catch((err) => {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Something went wrong",
              showConfirmButton: false,
              timer: 3000,
            });
            console.log(err);
          });
      } else {
        toast.error("Confirm password is different", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Zoom,
        });
      }
    } else {
      toast.error("Try Again", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
      });
    }
  };

  // const validatePassword = () => {
  //     var status = false;
  //     var passworderror = document.getElementById("passworderror");

  //     // Check if the length is between 8 and 20 characters
  //       if (newpassword.length >= 8 ) {
  //         passworderror.innerHTML = "Password must be 8 characters long.";
  //     }

  //     // Check if it contains at least one uppercase letter
  //     else if (!/[A-Z]/.test(newpassword)) {
  //         passworderror.innerHTML = "Password must contain at least one uppercase letter.";
  //     }

  //     // Check if it contains at least one lowercase letter
  //     else if (!/[a-z]/.test(newpassword)) {
  //         passworderror.innerHTML = "Password must contain at least one lowercase letter.";
  //     }

  //     // Check if it contains at least one digit
  //     else if (!/\d/.test(newpassword)) {
  //         passworderror.innerHTML = "Password must contain at least one digit.";
  //     }

  //     // Check if it contains at least one special character
  //     else if (!/[^a-zA-Z0-9]/.test(newpassword)) {
  //         passworderror.innerHTML = "Password must contain at least one special character.";
  //     }
  //     else {
  //         // If all conditions pass, return null indicating valid password
  //         status = true;
  //     }
  //     return status;
  // };

  const validatePassword = () => {
    var status = false;
    var passworderror = document.getElementById("passworderror");
    // var newpassword = document.getElementById("newpassword").value; // Assuming you have an input field with id="newpassword"

    // Check if the length is at least 8 characters
    if (newpassword.length < 8) {
      passworderror.innerHTML = "Password must be at least 8 characters long.";
    }
    // Check if it contains at least one uppercase letter
    else if (!/[A-Z]/.test(newpassword)) {
      passworderror.innerHTML =
        "Password must contain at least one uppercase letter.";
    }
    // Check if it contains at least one lowercase letter
    else if (!/[a-z]/.test(newpassword)) {
      passworderror.innerHTML =
        "Password must contain at least one lowercase letter.";
    }
    // Check if it contains at least one digit
    else if (!/\d/.test(newpassword)) {
      passworderror.innerHTML = "Password must contain at least one digit.";
    }
    // Check if it contains at least one special character
    else if (!/[^a-zA-Z0-9]/.test(newpassword)) {
      passworderror.innerHTML =
        "Password must contain at least one special character.";
    } else {
      // If all conditions pass, return true indicating valid password
      status = true;
      passworderror.innerHTML = ""; // Clear any previous error messages
    }
    return status;
  };

  return (
    <>
      <ToastContainer />

      {/* <Header /> */}

      <div
        className="container-fluid m-0 p-0"
        style={{
          maxWidth: "100%",
          height: "100vh",
          backgroundColor: "#ececec",
        }}
      >
        <div
          className="container d-flex justify-content-center align-items-start min-vh-100"
          style={{ backgroundColor: "#ececec" }}
        >
          <div className="row border rounded-5 p-3 bg-white shadow box-area mt-5">
            <div
              className="col-md-6 p-0 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
              style={{ background: "crimson" }}
            >
              <div className="featured-image">
                <img
                  src="images/About-us.webp"
                  className="rounded-4"
                  style={{ width: "500px", height: "500px" }}
                />
              </div>
              <p
                className="text-white fs-2 mt-3 text"
                style={{ fontWeight: "600" }}
              >
                Be Verified
              </p>
              <small
                className="text-white text-wrap text-center text"
                style={{ width: "17rem" }}
              >
                Join experienced Wedding Planner on this platform.
              </small>
            </div>
            <div className="col-md-6 right-box">
              <div className="row align-items-center">
                <div className="header-text mb-4">
                  <h2>Welcome,</h2>
                  <p className="ms-2">
                    Recover Your{" "}
                    <span className="text-primary fw-bold">
                      Wedding Planner
                    </span>{" "}
                    Account
                  </p>
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    onKeyUp={() => validatePassword()}
                    onChange={(event) => setnewpassword(event.target.value)}
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="Enter New Password"
                  />
                </div>
                <small className="text-danger" id="passworderror"></small>

                <div className="input-group mt-4">
                  <input
                    type="text"
                    onChange={(event) => setconfirmpassword(event.target.value)}
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="Confirm Password"
                  />
                </div>
                <small className="text-danger" id="passworderror2"></small>

                <div className="input-group mb-3 d-flex justify-content-center mt-5">
                  <button
                    onClick={() => resetpassword()}
                    className="btn btn-lg btn-primary w-100 fs-6"
                  >
                    Reset Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// import { useLocation } from "react-router-dom";

// export default function ResetPassword() {
//   const location = useLocation();
//   const { email, vendorType } = location.state || {};

//   console.log("Vendor Type:", vendorType);
//   console.log("Email:", email);

//   return (
//     <div>
//       <h1>Reset Password</h1>
//       <p>Email: {email}</p>
//       <p>Vendor Type: {vendorType}</p>
//       {/* Add your reset password form and logic here */}
//     </div>
//   );
// }
