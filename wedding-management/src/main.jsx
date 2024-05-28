import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Auth0Provider
    domain="dev-as8h5ibmndbri165.us.auth0.com"
    clientId="ebAek1WogJoGIYHQzmcWDuoc4ymshHnB"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
    <App />
  </Auth0Provider>,
  </BrowserRouter>
);

// import { GoogleOAuthProvider } from "@react-oauth/google";
{/* <GoogleOAuthProvider clientId="1005015777703-s0gdiorlrhth353s0olqj79f79ctt5kj.apps.googleusercontent.com"> */}
{/* </GoogleOAuthProvider> */}
