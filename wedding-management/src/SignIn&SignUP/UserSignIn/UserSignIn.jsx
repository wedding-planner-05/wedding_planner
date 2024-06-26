import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./UserSignIn.css";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import SignInWithGoogle from "../SIgnInWithGoogle/SIgnInWithGoogle";
import axios from "axios";

const UserSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // const onSubmit = ()=>{
  //         navigate('/otpVerify')
  //   }
  const signIn = () => {
    if (email == "" && password == "") {
      window.alert("please enter id password");
    } else {
      axios
        .post("http://localhost:3000/userRouter", { email, password })
        .then((result) => {
          if (result.data.code == 200) {
            localStorage.setItem("isLogged", true);
            navigate("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }; 
   
  const VendosSignPage = ()=>{
      navigate('/vendorSignIn')
  }

  return (
    <>
      <div className="container-fluid">
        <Navbar />
        <div className="container pr-0 ">
          <div className="signin row justify-content-center">
            <div className="card name d-flex align-items-center justify-content-center  col-md-6">
              <img
                className="user-signIn-page-image"
                src="/images/Rectangle 12.png"
                alt=""
              />
            </div>

            <div
              className=" col-6 col-sm-9 col-md-6 col-12"
              style={{ height: "auto", border: "" }}
            >
              <div className="text-center col-12 mt-4">
                <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  Sign In/Sign Up
                </span>
              </div>
              <div className="mt-5 col-12 form-group row row-gap-4 justify-content-center   ">
                <div class="mt-2 pr-0 col-12 col-md-9">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="form-control data-enter"
                    placeholder="Enter Email"
                    name="title"
                  />
                </div>
                <div className="col-12 pr-0 col-md-9">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="form-control data-enter"
                    placeholder="Enter Password"
                  />
                  <button
                    style={{
                      backgroundColor: "crimson",
                      color: "white",
                      boxShadow: "none",
                    }}
                    type="submit"
                    onClick={() => signIn()}
                    className="mt-5 col-12 btn mb-2"
                  >
                    Confirm
                  </button>
                </div>
                <div
                  style={{ color: "black", cursor: "pointer" }}
                  className="col-12 col-md-9"
                >
                  <span> Forget Password </span>
                </div>
                <div className="col-9 d-flex justify-content-center">
                  _____________or_____________
                </div>
                <div
                  className="col-12 col-md-9 mt-3"
                  style={{ boxShadow: "none" }}
                >
                  <button
                    className="col-12 col-md-12 d-flex btn justify-content-evenly align-items-center "
                    id="googlebutton"
                  >
                  
                    <SignInWithGoogle />
                  </button>
                </div>
                <div className="col-12 col-md-9 d-flex align-items-center  justify-content-between mt-4">
                  {" "}
                  <span className="button-text">Are you a vendor...?</span>{" "}
                  <button onClick={()=>{VendosSignPage()}} className="button-text btn border-danger">Business SignIn</button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSignIn;
