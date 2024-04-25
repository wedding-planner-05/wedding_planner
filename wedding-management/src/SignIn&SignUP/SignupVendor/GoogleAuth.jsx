
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

function GoogleAuth({ setIsLogin }) {
    const navigate = useNavigate();

    const handleGoogleLoginSuccess = (credentialResponse) => {
        console.log(credentialResponse);
        const decode = jwtDecode(credentialResponse.credential);
        console.log(decode, "this is uuid");
        setIsLogin(decode.email_verified);
        navigate("/");
    };

    const handleGoogleLoginError = () => {
        console.log('Login Failed');
    };

    return (
        <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginError}
        />
    );
}

export default GoogleAuth;
