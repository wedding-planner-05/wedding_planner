import express from 'express';
import twilio from 'twilio';

const app = express();
const port = 8080;

const accountSid = 'ACee772ea764534aedf2ce8bc634abb953';
const authToken = '40267529709690cc16d8debfd379b68f';
const twilioPhoneNumber = '+917354560597'; // Your Twilio Phone Number

const client = twilio(accountSid, authToken);

// Generate a random 6-digit OTP
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000);
}

// Store OTPs mapped to phone numbers
const otpMap = new Map();

// Send OTP to the provided phone number
app.post('/sendOTP', (req, res) => {
    const { phoneNumber } = req.body;

    const otp = generateOTP();
    otpMap.set(phoneNumber, otp);

    client.messages
        .create({
            body: `Your OTP is: ${otp}`,
            to: phoneNumber,
            from: twilioPhoneNumber
        })
        .then(() => {
            res.send('OTP sent successfully');
        })
        .catch((err) => {
            console.error('Error sending OTP:', err);
            res.status(500).send('Error sending OTP');
        });
});

// Verify OTP for the provided phone number
app.post('/verifyOTP', (req, res) => {
    const { phoneNumber, otp } = req.body;

    if (!otpMap.has(phoneNumber)) {
        return res.status(400).send('OTP not sent to this phone number');
    }

    const storedOTP = otpMap.get(phoneNumber);
    if (otp === storedOTP.toString()) {
        otpMap.delete(phoneNumber);
        res.send('OTP verified successfully');
    } else {
        res.status(400).send('Invalid OTP');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
