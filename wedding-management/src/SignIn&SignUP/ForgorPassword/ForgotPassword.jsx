import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import Header from "./Header";
import OTPInput from "react-otp-input";
// import image from './d4d7c1b4-98c5-4859-836b-294d65cbd56c.be0ab837448c28bf10ffa8eb4955cdf8.webp'
import { ToastContainer, toast } from "react-toastify";
import { Zoom } from "react-toastify";

export default function ForgetPassword() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [otpvisible, setotpvisible] = useState(false);
  const [otp, setotp] = useState("");
  const [vendorType, setVendorType] = useState("");

  const [isValid, setIsValid] = useState(true);

  // const type=this.props;

  const validateEmail = () => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(re.test(email));
  };

  const checkaccount = async () => {
    // let user = await axios.post("http://localhost:3000/user/findbyemail", { email })
    let user = true;
    if (user) {
      axios
        .post("http://localhost:3000/otp/otp/request", { email })
        .then((res) => {
          console.log("response : ",res);
          // alert("OTP send successfully");
          toast.success("OTP send successfully", {
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
          setotpvisible(true);
        })
        .catch((err) => {
          toast.error("Something went wrong", {
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
          console.log(err);
        });
    }
  };

  const verifyOTP = () => {
    axios
      .post("http://localhost:3000/otp/otp/verify", { email, otp })
      .then((res) => {
        console.log("REsponse: ",res);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "OTP verification successful",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/resetPassword", { state: { email,vendorType } });
      })
      .catch((err) => {
        // alert("OTP is incorrect")
        toast.error("OTP is incorrect", {
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
        console.log(err);
      });
  };

  console.log("Vendor Type:", vendorType);
  console.log("EMail :", email);
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
                <div className="mt-5 header-text mb-4 text-center">
                  <h2 className="px-2">Welcome</h2>
                  <p className="ms-2 mt-3 ">
                    Recover Your{" "}
                    <span className="text-primary fw-bold">
                      Wedding Planner
                    </span>{" "}
                    Account
                  </p>
                </div>
                <div className="input-group row">
                  {/* <div className="m-2">
                    <select
                      type="text"            
                      // onKeyUp={() => validateEmail()}
                      onChange={(event) => setVendorType(event.target.value)}
                      className="form-control form-control-lg bg-light fs-6 col"
                      placeholder="Email address"
                    >
                      <option value="">Select Vendor Type - </option>
                      <option value="garden">Cater</option>
                      <option value="dress">Dress</option>
                      <option value="garden">Garden</option>
                      <option value="mehendi">Mehendi</option>
                      <option value="photographer">Photographer</option>
                      <option value="sound">Sound</option>
                    </select>
                  </div> */}

                  <select
                    onChange={(event) => setVendorType(event.target.value)}
                    className="form-control form-control-lg bg-light fs-6 col m-2"
                    style={{ backgroundColor: "white" }}
                  >
                    <option value="">Select Vendor Type - </option>
                    <option value="cater">Cater</option>
                    <option value="dress">Dress</option>
                    <option value="garden">Garden</option>
                    <option value="mehendi">Mehendi</option>
                    <option value="photographer">Photographer</option>
                    <option value="sound">Sound</option>
                  </select>

                  <div className="m-2">
                    <input
                      type="text"
                      onKeyUp={() => validateEmail()}
                      onChange={(event) => setemail(event.target.value)}
                      className="form-control form-control-lg bg-light fs-6 col p-2"
                      placeholder="Email address"
                    />
                  </div>
                </div>
                <small className="text-danger" id="emailerror">
                  {isValid ? "" : " Please enter a valid email address"}
                </small>

                <div
                  className={
                    otpvisible
                      ? "input-group d-flex justify-content-center mt-4"
                      : "d-none"
                  }
                >
                  <OTPInput
                    value={otp}
                    onChange={setotp}
                    numInputs={6}
                    otpType="number"
                    autoFocus
                    className="otp-container"
                    inputStyle={{
                      backgroundColor: "white",
                      color: "",
                      outline: "none",
                      marginRight: "10px",
                      border: "none",
                      borderRadius: "10px",
                      width: "30px",
                      height: "40px",
                    }}
                    renderInput={(props) => <input {...props} />}
                  />
                </div>
                <div className="input-group mb-3 d-flex justify-content-center mt-5">
                  <button
                    onClick={() => checkaccount()}
                    className={
                      otpvisible ? "d-none" : "btn btn-lg btn-primary w-50 fs-6"
                    }
                  >
                    Send Otp
                  </button>
                  <button
                    onClick={() => verifyOTP()}
                    className={
                      otpvisible ? "btn btn-lg btn-primary w-50 fs-6" : "d-none"
                    }
                  >
                    Verify Otp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div>   </div> */}

      {/* < ResetPassword vendorType={vendorType} /> */}
    </>
  );
}
