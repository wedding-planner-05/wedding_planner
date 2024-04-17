import { GoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import React from "react";

const SignInWithGoogle = () => {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse);
        const decode = jwtDecode(credentialResponse.credential)
        console.log(decode);

      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />

    // useGoogleOneTapLogin({
    //   onSuccess: (credentialResponse) => {
    //     console.log(credentialResponse);
    //   },
    //   onError: () => {
    //     console.log("Login Failed");
    //   },
    // })
  );
};

export default SignInWithGoogle;
