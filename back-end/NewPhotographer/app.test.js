import dotenv from 'dotenv';
dotenv.config();

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const photographerVendor=process.env.PHOTOGRAPHER_VENDOR

console.log(dbHost);
console.log(dbPassword);
console.log(dbUser);

console.log(photographerVendor);
