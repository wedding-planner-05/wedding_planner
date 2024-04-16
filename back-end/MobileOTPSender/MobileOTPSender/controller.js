// userController.js
import fetch from 'node-fetch';
import User from './model.js';

async function getUserDetails(accessToken, CLIENT_ID) {
  try {
    const url = "https://eapi.phone.email/getuser";
    const payload = new FormData();
    payload.append("access_token", accessToken);
    payload.append("client_id", CLIENT_ID);

    const response = await fetch(url, { method: "POST", body: payload });
    const responseData = await response.json();

    return new User(responseData.country_code, responseData.phone_no, responseData.ph_email_jwt);
  } catch (error) {
    throw error;
  }
}

export { getUserDetails };
