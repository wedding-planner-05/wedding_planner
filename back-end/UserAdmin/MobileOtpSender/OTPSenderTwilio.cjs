const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

client.verify.v2.services("VAffb6935177770283462b8c63592d0278")
      .verificationChecks
      .create({to: '+917354560597', code: '[Code]'})
      .then(verification_check => console.log(verification_check.status));