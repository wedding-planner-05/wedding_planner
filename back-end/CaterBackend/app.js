import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from './model/Login.model.js';
import bodyParser from "body-parser";
import multer from "multer";
import { fileURLToPath } from "url"; // corrected import
import path from "path"; // added import
import CaterDetails from "./model/CaterDetails.model.js";
import xlsx from "xlsx"; // Added import for xlsx library
import CaterFormDetails from "./model/CaterFormDetails.js";



const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));
const JWT_SECRET = 'devendra';

const upload = multer({ dest: "public/images" });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/cater/signup", async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ email, password: hashedPassword });
        const token = jwt.sign({ email: user.email }, JWT_SECRET);
        res.status(201).json({ message: "User signed up successfully", token });
    } catch (error) {
        console.error("Error while signing up:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.post("/cater/resetPassword", async (request, response,next) => {
        // console.log('Request body:', request.body);
        try {
            const { email, newpassword } = request.body;
    
            if (!email || !newpassword) {
                return response.status(400).json({ message: "Email and new password are required" });
            }
    
            const gardenLogin = await User.findOne({ where: { email } });
    
            if (!gardenLogin) {
                return response.status(404).json({ message: "PhotographerLogin not found" });
            }
    
            const hashedPassword = await bcrypt.hash(newpassword, 10);
    
            const [affectedRows] = await User.update(
                { password: hashedPassword },
                { where: { email } }
            )
    
            if (affectedRows > 0) {
                return response.status(200).json({ message: "Profile Updated Successfully" });
            } else {
                return response.status(500).json({ error: "Failed to update profile" });
            }
    
        } catch (err) {
            console.error(err);
            return response.status(500).json({ error: "Internal Server Error", err });
        }
    }
);

app.post("/cater/signin", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });

        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ username: user.username }, JWT_SECRET);
            res.status(201).json({ login: true, message: "Login successful", token });
        } else {
            res.status(401).json({ login: false, message: "Invalid credentials" });
        }
    } catch (error) {
        console.error("Error while logging in:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.post("/cater/save", upload.single("imagesUrl"), (req, res) => {
    let filename = req.file.filename;
    let name = req.body.name;
    let servicecharge = req.body.servicecharge;
    let description = req.body.description;
    let contactno = req.body.contactno;
    let categoryId = req.body.categoryId;
    let imageUrl = "images/" + filename;

    const Cater = CaterDetails.create({ name,servicecharge,description,contactno,categoryId, imageUrl});

    Cater.then(result => {
        res.status(201).json({ message: "Data saved successfully" });
    }).catch(err => {
        console.error("Error while saving data:", err);
        res.status(500).json({ error: "Internal server error" });
    });
});

app.post("/cater/addformdetails", upload.single("file"),(req, res) => {

    let filename = req.file.filename;
    let name = req.body.name;
    let servicecharge = req.body.servicecharge;
    let email = req.body.email;
    let contactno = req.body.contactno;
    let location = req.body.location;
    let imageUrl = "images/" + filename;


     CaterFormDetails.create({
        name, servicecharge, email, contactno, location, imageUrl
    }).then(result => {
        res.status(201).json({ message: "Data saved successfully" });
    }).catch(err => {
        console.log(filename);
        console.error("Error while saving data:", err);
        res.status(500).json({ error: "Internal server error" });
    });
})


app.get("/cater/cater/viewAllVendors", async (req, res) => {
    try {
        const data = await CaterDetails.findAll();
        console.log(data);
        res.status(200).json({ data });
    } catch (error) {
        console.error("Error while retrieving data:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


app.post("/cater/addinBulk", async (req, res, next) => {

    const workbook = xlsx.readFile('dataregardCater1.xlsx');
    const sheet_name = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheet_name];

    console.log(req.body);

    const data = xlsx.utils.sheet_to_json(sheet);
    console.log(data);
    var i = 0;
    for (let item of data) {

        let name = item.name;
        let servicecharge = item.servicecharge;
        let description = item.description;
        let contactno = item.contactno;
        let categoryId = item.categoryId;
        let imageUrl = item.imageUrl;

        console.log("-------------------------------------------------------------------------------------");
        console.log(name + " " + servicecharge + " " + description + " " + " " + contactno + " " + categoryId + " " + imageUrl);
        console.log("-------------------------------------------------------------------------------------");
    }
    try {
        for (let item of data) {
            let name = item.name;
            let servicecharge = item.servicecharge;
            let description = item.description;
            let contactno = item.contactno;
            let categoryId = item.categoryId;
            let imageUrl = item.imageUrl;

            console.log(name + " " + servicecharge + " " + description + " " + " " + contactno + " " + categoryId + " " + imageUrl);
            console.log("this is your image url so check it", imageUrl);
            await CaterDetails.create({
                name, servicecharge, description, contactno, categoryId, imageUrl
            })
        }
        return res.status(200).json({ message: "product added successfully.." })
    } catch (err) {
        console.log(err);
        return res.status(501).json({ message: "Internal server error" })
    }
})
const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


