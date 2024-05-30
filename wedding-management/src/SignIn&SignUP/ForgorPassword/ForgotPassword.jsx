import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import OTPInput from "react-otp-input";
import { ToastContainer, toast } from "react-toastify";
import { Zoom } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function ForgetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otpVisible, setOtpVisible] = useState(false);
  const [otp, setOtp] = useState("");
  const [vendorType, setVendorType] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [typeError, setTypeError] = useState('');

  const validateEmail = () => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(re.test(email));
  };

  const validateFields = () => {
    let valid = true;
    if (!vendorType) {
      setTypeError('Vendor type is required');
      valid = false;
    } else {
      setTypeError('');
    }

    if (!email) {
      setEmailError('Email is required');
      valid = false;
    } else if (!isValid) {
      setEmailError('Please enter a valid email address');
      valid = false;
    } else {
      setEmailError('');
    }

    if (valid) {
      setOtpVisible(true);
      checkaccount();
    } else {
      setOtpVisible(false);
    }
  };

  const checkaccount = async () => {
    let user = true;
    if (user) {
      axios
        .post("http://localhost:3000/otp/otp/request", { email })
        .then((res) => {
          console.log("response",res);
          toast.success("OTP sent successfully", {
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
          setOtpVisible(true);
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
        console.log("response",res);

        Swal.fire({
          position: "center",
          icon: "success",
          title: "OTP verification successful",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/resetPassword", { state: { email, vendorType } });
      })
      .catch((err) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    validateFields();
  };

  return (
    <>
      <ToastContainer />
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
                    <span className="text-danger fw-bold">
                      Wedding Planner
                    </span>{" "}
                    Account
                  </p>
                </div>

                <div className="input-group row">
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
                  {typeError && <small className="text-danger">{typeError}</small>}
                  
                  <div className="m-2">
                    <input
                      type="text"
                      onKeyUp={validateEmail}
                      onChange={(event) => setEmail(event.target.value)}
                      className="form-control form-control-lg bg-light fs-6 col p-2"
                      placeholder="Email address"
                    />
                  </div>
                  {emailError && <small className="text-danger">{emailError}</small>}
                </div>

                <div
                  className={
                    otpVisible
                      ? "input-group d-flex justify-content-center mt-4"
                      : "d-none"
                  }
                >
                  <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    otpType="number"
                    autoFocus
                    className="otp-container"
                    inputStyle={{
                      backgroundColor: "",
                      color: "",
                      outline: "none",
                      marginRight: "10px",
                      border: "3px solid #272727",
                      borderRadius: "10px",
                      width: "30px",
                      height: "40px",
                    }}
                    renderInput={(props) => <input {...props} />}
                  />
                </div>

                <div className="input-group mb-3 d-flex justify-content-center mt-5">
                  <button
                    onClick={handleSubmit}
                    className={
                      otpVisible ? "d-none" : "btn btn-lg btn-danger w-50 fs-6"
                    }
                  >
                    Send OTP
                  </button>
                  <button
                    onClick={verifyOTP}
                    className={
                      otpVisible ? "btn btn-lg btn-primary w-50 fs-6" : "d-none"
                    }
                  >
                    Verify OTP
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

