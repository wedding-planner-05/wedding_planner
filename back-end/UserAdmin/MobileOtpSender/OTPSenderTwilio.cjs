const accountSid = 'ACee772ea764534aedf2ce8bc634abb953';
const authToken = '40267529709690cc16d8debfd379b68f';
const client = require('twilio')(accountSid, authToken);

client.verify.v2.services("VAffb6935177770283462b8c63592d0278")
      .verificationChecks
      .create({to: '+917354560597', code: '[Code]'})
      .then(verification_check => console.log(verification_check.status));