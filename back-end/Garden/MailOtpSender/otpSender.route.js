import express from 'express';
import { generateOTP, otpStore } from '../MailOtpSender/otpSender.model.js';
import { sendOTP } from '../MailOtpSender/otpSender.controller.js';

const router = express.Router();

router.post('/request-otp', (req, res) => {
    const { email } = req.body;
    const otp = generateOTP();
    otpStore[email] = otp;
    sendOTP(email, otp);
    res.status(200).json({ message: 'OTP sent successfully' })
});

router.post('/verify-otp', (req, res) => {
    const { email, otp } = req.body;
    const storedOTP = otpStore[email];
    try {
        if (storedOTP === otp) {
            res.status(200).json({ message: 'OTP verified successfully' });
            delete otpStore[email];
        } else {
            res.status(404).json({ error: "Invalid OTP" });
        }
    } catch (err) {
        res.status(404).json({ error: "Internal Server Error..." });
    }
});

export default router;
