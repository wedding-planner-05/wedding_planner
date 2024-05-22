import {resetPassword,createProfile,signin,signup,updateDetails,viewAllVendors,viewProfile} from '../controller/sound_info.controller.js' ;
import express from 'express' ;
import multer from 'multer'
import { body } from 'express-validator';
import soundVendorDetails from '../model/sound_info.js';
import xlsx from 'xlsx';
// import { verifyVendor } from '../verify/verifyToken.js';

let router = express.Router() ;

let upload = multer({dest : "public/images/"}) ;

router.post(
    "/signup",
    // body("name").notEmpty(),
    // body("name").isAlpha(), 
    // body("contact").isNumeric(),
    // body("contact").notEmpty(),
    body("email").isEmail(),
    body("password").isLength({ min: 5, max: 12 }).notEmpty(),
    // body("address").notEmpty(),
    signup
  );
  
  router.post(
    "/signin",
    body("email").isEmail(),
    body("password").notEmpty().isLength({ min: 5 }),
    signin
  );
  
//   router.post(
//     "/update",
//     // body("name").notEmpty(),
//     // body("name").isAlpha(),
//     // body("contact").isNumeric(),
//     // body("contact").notEmpty(),
//     // body("email").isEmail(),
//     // body("password").isLength({ min: 5 }),
//     // body("address").notEmpty(),
//     upDate
//   );
  
router.post("/resetPassword",resetPassword);

router.post("/createProfile",
// upload.single("image")
// ,body("type").notEmpty(),
body("serviceCharge").notEmpty(),
// body("description").notEmpty(),
createProfile) ;

router.get("/viewProfile",viewProfile) ;

router.post("/update",body("vendor_id").notEmpty(),body("vendor_id").notEmpty()
,body("type").notEmpty(),
body("charges").isNumeric(),
body("description").isAlpha(),
body("status").isAlpha(),updateDetails) ;

router.post("/addInBulk",async (req, res) => {

    const workbook = xlsx.readFile('products.xlsx');
    const sheet_name = workbook.SheetNames[0]; // Assuming you want to read the first sheet
    const sheet = workbook.Sheets[sheet_name];
    console.log("sheet name : "+sheet);
    console.log(req.body);
    // Convert the sheet to JSON
    const data = xlsx.utils.sheet_to_json(sheet);
    console.log(data);
    var i = 0;
    for (let item of data) {
        let name = item.name;
        let imageUrl = item.imageUrl;
        let serviceCharge = item.serviceCharge;
        let address = item.address;
        let rating= item.rating;
        let description= item.description;
        let contactno = item.contactno;
        

        console.log(name + " " + imageUrl + " " + serviceCharge + " " + address  + " " +  description+ " " + rating + " " + contactno);
    }
    try {
        for (let item of data) {
            let name = item.name;
            let imageUrl = item.imageUrl;
            let serviceCharge = item.serviceCharge;
            let address = item.address;
            let rating = item.rating;
            let description = item.description;
            let contactno = item.contactno;

            console.log(name + " " + imageUrl + " " + serviceCharge + " " + address + " " + description + " " + rating + " " + contactno);

            await soundVendorDetails.create({
                name, imageUrl, serviceCharge, address, rating, description, contactno,
            })
        }
        return res.status(200).json({ message: "product added successfully.." })
    } catch (err) {
        console.log(err);
        return res.status(501).json({ message: "Internal server error" })
        }
    }
)
router.get("/viewAllVendors",viewAllVendors)

export default router ;



