import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
import PhotoGrapherDetailsRoute from "./routes/photoGrapherDetails.js";
import PhotoGrapherLoginRoute from "./routes/photoGrapherLogin.js";

import cors from 'cors';
import path from "path";
import { fileURLToPath } from "url";

// import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const photographerVendor = process.env.PHOTOGRAPHER_VENDOR

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));


app.use("/" + photographerVendor, PhotoGrapherLoginRoute);
app.use("/photographer", PhotoGrapherDetailsRoute);

const port = 3005;

app.listen(port, () => {
    console.log("Server Started...");
});
