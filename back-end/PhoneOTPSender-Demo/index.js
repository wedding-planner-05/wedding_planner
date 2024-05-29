// app.js
import express from "express";
import path from "path";
import dotenv from 'dotenv';
import userRoute from './MobileOTPSender/route.js';

dotenv.config();

const app = express();
const port = 3000;

app.set("view engine", "ejs");

const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.use(express.static(path.join(__dirname, "public")));
app.use('/user',userRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
// console.log(process.env.CLIENT_ID);
