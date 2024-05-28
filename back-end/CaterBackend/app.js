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

app.post("/cater/signup", async (request, response, next) => {
    // console.log(request.body);

    const { email, password } = request.body;

    await User.create({ email, password })
        .then((result) => {
            return response.status(200).json({ message: "SignUp Sucess...", data: result });
        }).catch(err => {
            console.log(err);
            if (err.parent.errno * 1 == 1062)
                return response.status(401).json({ message: "Email is already registered...", Erro: (err.parent.errno * 1) });
            return response.status(401).json({ message: "please enter correct details...", Error: err });
        })
}
)
app.post("/cater/AddInBulkVendor", async (req, res, next) => {
    // console.log(request.body);
    const workbook = xlsx.readFile('VendorSignInData.xlsx');
    const sheet_name = workbook.SheetNames[0]; // Assuming you want to read the first sheet
    const sheet = workbook.Sheets[sheet_name];

    // Convert the sheet to JSON/
    console.log("Resuest Body",req.body);
    const data = xlsx.utils.sheet_to_json(sheet);
    console.log("Data : ",data);

    try {
        for (let item of data) {
            let email=item.email;
            let password=item.password+"";
            await User.create({
                email,password
            })
        }
        return res.status(200).json({ message: "Add In Bulk SignUp added successfully.." })
    } catch (err) {
        console.log(err);
        return res.status(501).json({ message: "Internal server error" })
    }
}
)

app.post("/cater/resetPassword", async (request, response, next) => {
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
    console.log(email, password);

    try {
        const user = await User.findOne({ where: { email } });

        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ username: user.username }, JWT_SECRET);
            res.status(201).json({ login: true, message: "Login successful", token, data: user });
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

    const Cater = CaterFormDetails.create({ name, servicecharge, description, email, contactno, categoryId, imageUrl });

    Cater.then(result => {
        res.status(201).json({ message: "Data saved successfully" });
    }).catch(err => {
        console.error("Error while saving data:", err);
        res.status(500).json({ error: "Internal server error" });
    });
});


// app.post("/cater/addformdetails", upload.single("file"), (req, res) => {
//     const {loginUserid, name, servicecharge, email, contactno, location } = req.body;
//     const filename = req.file?.filename;
//     if (!filename) {
//         return res.status(400).json({ error: "File upload failed" });
//     }
//     const imageUrl = `images/${filename}`;

//     CaterFormDetails.create({loginUserid, name, servicecharge, email, contactno, location, imageUrl })
//         .then(result => {
//             res.status(201).json({ message: "Data saved successfully", data: result });
//         })
//         .catch(err => {
//             console.error("Error while saving data:", err);
//             res.status(500).json({ error: "Internal server error", err: err });
//         });
// });
app.post("/cater/addformdetails", upload.single("file"), (req, res) => {
    const { loginUserId, name, servicecharge, email, contactno, location } = req.body;
    const filename = req.file?.filename;
    if (!filename) {
        return res.status(400).json({ error: "File upload failed" });
    }
    const imageUrl = `images/${filename}`;

    CaterFormDetails.create({ loginUserId, name, servicecharge, email, contactno, location, imageUrl })
        .then(result => {
            res.status(201).json({ message: "Data saved successfully", data: result });
        })
        .catch(err => {
            console.error("Error while saving data:", err);
            res.status(500).json({ error: "Internal server error", err: err });
        });
});


app.get("/cater/viewAllVendors", async (req, res) => {
    try {
        // CaterFormDetails
        const data = await CaterFormDetails.findAll();
        console.log(data);
        res.status(200).json({ data });
    } catch (error) {
        console.error("Error while retrieving data:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get("/cater/viewprofile/:id", async (request, response, next) => {
    try {
        const id = parseInt(request.params.id, 10);
        if (isNaN(id)) {
            return response.status(400).json({ error: "Invalid ID format" });
        }
        console.log(id);
        const caterobj = await CaterFormDetails.findOne({ where: { loginUserId: id }, raw: true });
        if (caterobj) {
            return response.status(200).json({ message: "View Profile success...", data: caterobj });
        } else {
            return response.status(404).json({ error: "Garden not found" });
        }
    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: "Internal Server Error" });
    }
})
// app.get("/cater/cater/viewAllVendorss", async (req, res) => {
//     try {
//         const data = await CaterFormDetails.findAll();
//         console.log(data);
//         res.status(200).json({ data });
//     } catch (error) {
//         console.error("Error while retrieving data:", error);
//         res.status(500).json({ error: "Internal server error" });
//     }
// });


// app.post("/cater/addinBulk", async (req, res, next) => {

//     const workbook = xlsx.readFile('dataregardCater2.xlsx');
//     const sheet_name = workbook.SheetNames[0];
//     const sheet = workbook.Sheets[sheet_name];

//     console.log(req.body);

//     const data = xlsx.utils.sheet_to_json(sheet);
//     console.log(data);
//     var i = 0;
//     for (let item of data) {
//         let id = item.name
//         let loginUserId = item.name
//         let name = item.name;
//         let servicecharge = item.servicecharge;
//         let email = item.email
//         let contactno = item.contactno;
//         let location = item.location
//         let imageUrl = item.imageUrl;

//         console.log("-------------------------------------------------------------------------------------");
//         console.log(id + " " + loginUserId + " " + name + " " + servicecharge + " " + email + " " + " " + contactno + " " + location + " " + imageUrl);
//         console.log("-------------------------------------------------------------------------------------");
//     }
//     try {
//         for (let item of data) {
//             let id = item.name
//             let loginUserId = item.name
//             let name = item.name;
//             let servicecharge = item.servicecharge;
//             let email = item.email
//             let contactno = item.contactno;
//             let location = item.location
//             let imageUrl = item.imageUrl;

//             console.log(id + " " + loginUserId + " " + name + " " + servicecharge + " " + email + " " + " " + contactno + " " + location + " " + imageUrl);
//             console.log("this is your image url so check it", imageUrl);
//             await CaterFormDetails.create({
//                 id, loginUserId, name, servicecharge, email, contactno, location, imageUrl
//             })
//         }
//         return res.status(200).json({ message: "product added successfully.." })
//     } catch (err) {
//         console.log(err);
//         return res.status(501).json({ message: "Internal server error" })
//     }
// })
app.post("/cater/addinBulk", async (req, res, next) => {
    const workbook = xlsx.readFile('dataregardCater2.xlsx');
    const sheet_name = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheet_name];

    console.log(req.body);

    const data = xlsx.utils.sheet_to_json(sheet);
    console.log(data);

    try {
        for (let item of data) {
            let id = item.id
            let loginUserId = item.loginUserId;  // Assuming loginUserId is correctly provided in the Excel
            let name = item.name;
            let servicecharge = item.servicecharge;
            let email = item.email;
            let contactno = item.contactno;
            let location = item.location;
            let imageUrl = item.imageUrl;

            console.log(loginUserId + " " + name + " " + servicecharge + " " + email + " " + contactno + " " + location + " " + imageUrl);
            console.log("this is your image url so check it", imageUrl);

            await CaterFormDetails.create({
                id,
                loginUserId,
                name,
                servicecharge,
                email,
                contactno,
                location,
                imageUrl
            });
        }
        return res.status(200).json({ message: "Caterer details added successfully.." });
    } catch (err) {
        console.log(err);
        return res.status(501).json({ message: "Internal server error" });
    }
});


app.get("/viewProfile/:id", async (request, response, next) => {
    try {
        const id = parseInt(request.params.id, 10);
        if (isNaN(id)) {
            return response.status(400).json({ error: "Invalid ID format" });
        }
        console.log(id);
        const CaterDetailss = await CaterDetails.findOne({ where: { gardenId: id }, raw: true });
        if (gardenobj) {
            return response.status(200).json({ message: "View Profile success...", data: CaterDetailss });
        } else {
            return response.status(404).json({ error: "Garden not found" });
        }
    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: "Internal Server Error" });
    }
})


const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


