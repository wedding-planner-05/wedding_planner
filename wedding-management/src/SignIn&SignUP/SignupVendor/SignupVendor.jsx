import { useState } from "react";
import axios from "axios";
import "./SignupVendor.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Swal from "sweetalert2";

function SignupVendor() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [choise, setChoise] = useState("");
  const navigate = useNavigate();
  const [strength, setStrength] = useState("");
  const strengthLabel = ["weak", "normal", "strong"];

  const getStrength = (password) => {
    let strengthIndicator = 0;
    let uppercase = false;
    let number = false;
    let lowercase = false;

    for (let index = 0; index < password.length; index++) {
      const char = password.charCodeAt(index);
      if (!uppercase && char >= 65 && char <= 90) {
        uppercase = true;
        strengthIndicator++;
      }
      if (!number && char >= 48 && char <= 57) {
        number = true;
        strengthIndicator++;
      }
      if (!lowercase && char >= 97 && char <= 122) {
        lowercase = true;
        strengthIndicator++;
      }
    }
    setStrength(strengthLabel[strengthIndicator]);
  };

  const validatePassword = () => {
    const passwordError = document.getElementById("passworderror2");
    if (password.length < 8) {
      passwordError.innerHTML = "Password must be at least 8 characters long.";
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      passwordError.innerHTML = "Password must contain at least one uppercase letter.";
      return false;
    }
    if (!/[a-z]/.test(password)) {
      passwordError.innerHTML = "Password must contain at least one lowercase letter.";
      return false;
    }
    if (!/\d/.test(password)) {
      passwordError.innerHTML = "Password must contain at least one digit.";
      return false;
    }
    if (!/[^a-zA-Z0-9]/.test(password)) {
      passwordError.innerHTML = "Password must contain at least one special character.";
      return false;
    }
    passwordError.innerHTML = ""; // Clear any previous error messages
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === "" || password === "" || choise === "") {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please fill in all the details",
      });
      return;
    }

    if (!validatePassword()) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Password is not valid",
      });
      return;
    }

    axios.post(`http://localhost:3000/${choise}/${choise}/signup`, {
      email,
      password,
    })
      .then((result) => {
        if (result.status === 201 || result.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Sign Up Successful",
          }).then(() => {
            navigate("/vendorSignIn");
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Bad request",
          });
        }
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.Error === 1062) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "User already exists",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Something went wrong",
          });
        }
      });
  };

  const VendorSignIn = () => {
    navigate("/vendorSignIn");
  };

  return (
    <>
      <Navbar />
      <ToastContainer />

      <div className="row boxwrapper container-fluid">
        <div className="col-md-3 imagediv">
          <img
            src="/images/Rectangle 12.png"
            style={{ height: "90%" }}
            className="col-md-10"
            alt=""
          />
        </div>
        <div className="col-md-4 formwrap">
          <form
            className="d-flex flex-column formdiv text-center col-md-12"
            onSubmit={handleSubmit}
          >
            <h3 className="text-center fontstyles">VENDOR SIGNUP</h3>
            <label htmlFor="">
              <select
                className="col-md-12 pt-2 pb-2 selection"
                onChange={(e) => {
                  setChoise(e.target.value);
                }}
              >
                <option value="">Select Vendor Type</option>
                <option value="cater">cater</option>
                <option value="dress">dress</option>
                <option value="garden">garden</option>
                <option value="mehendi">mehendi</option>
                <option value="photographer">photographer</option>
                <option value="sound">sound</option>
              </select>
            </label>
            <label htmlFor="">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="email pt-2 pb-2 mb-2 col-md-12 mt-4"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label htmlFor="">
              <input
                type="password"
                placeholder="Enter Your Password"
                className="p-2 mb-2 col-md-12 mt-2"
                onChange={(e) => {
                  setPassword(e.target.value);
                  getStrength(e.target.value);
                  validatePassword();
                }}
              />
              <small className="text-danger" id="passworderror2"></small>
            </label>

            <button
              type="submit"
              className="btn btn-block mt-3"
              style={{
                fontSize: "1.2rem",
                fontWeight: "bolder",
                background: "#D5133A",
                borderRadius: "2rem",
                color: "white",
              }}
            >
              Submit
            </button>
          </form>
          <div
            style={{ width: "80%" }}
            className="d-flex align-item-center justify-content-between flex-wrap mt-2"
          >
            <h6 className="p-2">Already Register</h6>
            <button
              onClick={VendorSignIn}
              style={{
                borderRadius: "20px",
                backgroundColor: "crimson",
                color: "white",
              }}
              className="btn"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default SignupVendor;
