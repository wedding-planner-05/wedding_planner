import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
import GardenLoginRoute from './route/gardenLogin.route.js'
import GardenDetailsRoute from './route/gardenDetails.route.js';

import cors from 'cors';
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/garden", GardenLoginRoute);
app.use("/garden-details", GardenDetailsRoute);

const port = 3003 ;

app.listen(port, () => {
    console.log("Server Started...");
});
