import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'wedding.planner.techwizards@gmail.com ',
        pass: 'ezlx nqpk jlqb goab'
    }
});


export const sendOTP = (email, otp) => {

    const mailOptions = {
        from: 'wedding.planner.techwizards@gmail.com',
        to: email,
        subject: 'OTP Verification for Wedding-Planner Application Registration',
        text: `Your OTP is: ${otp}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent successfully...');
        }
    });
};
