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
  const [isLogin, setisLogin] = useState(false);
  const [choise, setChoise] = useState("");
  const navigate = useNavigate();

  console.log(choise, "this is choise");
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
    console.log(strengthIndicator);
    setStrength(strengthLabel[strengthIndicator]);
  };
  console.log("choise: ", choise);
  console.log("email: ", email);
  console.log("password: ", password);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === "" || password === "") {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please fill in the details",
      });
    } else {
      axios.post(`http://localhost:3000/${choise}/${choise}/signup`, {
          email,
          password,
        })
        .then((result) => {
          if (result.status === 201 || result.status === 200) {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Sign In Success",
            }).then(() => {
              console.log(result);
              console.log("success");
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
          console.log(err);
          if (err.response.data.Erro === 1062) {
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
    }
  };

  const VendorSignIn = () => {
    navigate("/vendorSignIn");
  };
  const validatePassword = () => {
    var status = false;
    var passworderror2 = document.getElementById("passworderror2");
    // var newpassword = document.getElementById("newpassword").value; // Assuming you have an input field with id="newpassword"

    // Check if the length is at least 8 characters
    if (password.length < 8) {
      passworderror2.innerHTML = "Password must be at least 8 characters long.";
    }
    // Check if it contains at least one uppercase letter
    else if (!/[A-Z]/.test(password)) {
      passworderror2.innerHTML =
        "Password must contain at least one uppercase letter.";
    }
    // Check if it contains at least one lowercase letter
    else if (!/[a-z]/.test(password)) {
      passworderror2.innerHTML =
        "Password must contain at least one lowercase letter.";
    }
    // Check if it contains at least one digit
    else if (!/\d/.test(password)) {
      passworderror2.innerHTML = "Password must contain at least one digit.";
    }
    // Check if it contains at least one special character
    else if (!/[^a-zA-Z0-9]/.test(password)) {
      passworderror2.innerHTML =
        "Password must contain at least one special character.";
    } else {
      // If all conditions pass, return true indicating valid password
      status = true;
      passworderror2.innerHTML = ""; // Clear any previous error messages
    }
    return status;
  };

  return (
    <>
      <Navbar />
      <ToastContainer />

      {/* <div className='col-md-12 d-flex align-item-center justify-content-center'> */}

      <div className="row boxwrapper container-fluid">
        <div className="col-md-3 imagediv">
          {
            <img
              src="/images/Rectangle 12.png"
              style={{ height: "90%" }}
              className="col-md-10"
              alt=""
            />
          }
        </div>
        <div className="col-md-4 formwrap">
          <form
            className="d-flex flex-column formdiv text-center  col-md-12"
            onSubmit={()=>{handleSubmit(event)}}
          >
            <h3 className="text-center fontstyles">VENDOR SIGNUP</h3>
            <label htmlFor="">
              <select
                name=""
                id=""
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
                placeholder="Enter Your password"
                className="p-2 mb-2 col-md-12  mt-2 "
                onChange={(e) => {
                  setPassword(e.target.value);
                  getStrength(e.target.value);
                  validatePassword();
                }}
              />
              <small className="text-danger" id="passworderror2"></small>
            </label>

            {/* <div>
              <div className={`bars ${strength}`}>
                <div></div>
              </div>
              <div className="strength">
                {strength && <>{strength}:password</>}
              </div>
            </div> */}

            <button

              onClick={() => {
                var passworderror2 = document.getElementById("passworderror2");
                if (passworderror2.innerHTML == "") (()=>{handleSubmit()});
                else{
                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: "Field Required..",
                      });
                }
              }}
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

            {/* <div className="row mt-3 text-center d-flex justify-content-around">
              <span className="col-md-4 text-center">
                <small>
                <Link style={{ textDecoration: "none", color: "black" }}>
                  Forgot Password
                </Link>
                </small>
              </span>
                <span className="col-md-4 text-center">
                    <Link style={{ textDecoration: "none", color: "black" }}>
                    Help
                    </Link>
                </span>
            </div> */}

            {/* <div className='mt-4'>
                                <GoogleAuth setIsLogin={setisLogin} />
                            </div> */}
            <div className="lines">
              <span></span>
              <span style={{ border: "none" }}>
                <i className="bx bx-heart"></i>
              </span>
              <span></span>
            </div>
            <div></div>
          </form>
          <div
            style={{ width: "80%" }}
            className="d-flex align-item-center justify-content-between flex-wrap mt-2"
          >
            <h6 className="p-2">Already Register</h6>
            <button
              onClick={() => VendorSignIn()}
              style={{
                borderRadius: "20px",
                backgroundColor: "crimson",
                color: "white",
              }}
              className="btn"
            >
              {" "}
              Sign In{" "}
            </button>

            {/* <div onClick={() => {  }} className='text-center col-md-12'><button className='buttonVendor text-center' style={{ height: "4rem", width: "15rem", color: "white", fontSize: "1.5rem", borderRadius: "2rem" }}>BUISNESS SIGNIN</button></div> */}
          </div>
        </div>
      </div>
      {/* </div> */}

      <Footer />
    </>
  );
}

export default SignupVendor;