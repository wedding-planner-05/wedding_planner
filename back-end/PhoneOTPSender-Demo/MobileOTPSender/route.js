// userRoute.js
import express from 'express';
import { getUserDetails } from './controller.js';

const router = express.Router();

router.get("/otp", async (req, res) => {
    try {
        const CLIENT_ID = process.env.CLIENT_ID;
        const REDIRECT_URL = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
        const AUTH_URL = `https://auth.phone.email/log-in?client_id=${CLIENT_ID}&redirect_url=${REDIRECT_URL}`;

        const accessToken = req.query.access_token;

        const userDetails = accessToken ? await getUserDetails(accessToken, CLIENT_ID) : null;
        const data = { hasToken: accessToken ? true : false, userDetails, authUrl: AUTH_URL };

        res.render("index", data);
        console.log(data);
        // return res.status(200).json({message:"Success..."})
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error." });
    }
});

export default router;
