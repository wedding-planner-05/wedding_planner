import {reviewData, reviews,addInBulkVendor,resetPassword, createProfile, signin, signup, updateDetails, viewAllVendors, viewProfile, viewProfiles, ratingCount } from '../controller/sound_info.controller.js';
import express from 'express';
import multer from 'multer'
import { body } from 'express-validator';
import soundVendorDetails from '../model/sound_info.js';
import xlsx from 'xlsx';
import Posts from '../model/ImageArray.js';
import { where } from 'sequelize';
// import { verifyVendor } from '../verify/verifyToken.js';

let router = express.Router();

let upload = multer({ dest: "public/images/" });    

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
router.post("/createProfile",
upload.single("image"),upload.any('imageArray'), 
// ,body("type").notEmpty(),
body("serviceCharge").notEmpty(),
// body("description").notEmpty(),
createProfile) ;


router.post("/resetPassword", resetPassword);

router.post("/addInBulkVendor", addInBulkVendor);

router.post("/createProfile", upload.single("image"), body("vendor_id").notEmpty(), body("vendor_id").notEmpty()
    , body("type").notEmpty(),
    body("charges").isNumeric(),
    body("description").isAlpha(),
    body("status").isAlpha(), createProfile);

router.get("/viewProfiles/:id", viewProfile);

    router.post("/update", body("vendor_id").notEmpty(), body("vendor_id").notEmpty()
    ,body("type").notEmpty(),
    body("charges").isNumeric(),
    body("description").isAlpha(),
    body("status").isAlpha(), updateDetails);

router.post("/addInBulk",async (req, res) => {
    
    const workbook = xlsx.readFile('products.xlsx');
    const sheet_name = workbook.SheetNames[0]; // Assuming you want to read the first sheet
    const sheet = workbook.Sheets[sheet_name];
    console.log("sheet name : " + sheet);
    console.log(req.body);
    // Convert the sheet to JSON
    const data = xlsx.utils.sheet_to_json(sheet);
    console.log(data);
    var i = 0;
    for (let item of data) {
        let name = item.name;
        let vendorId = item.vendorId;
        let imageUrl = item.imageUrl;
        let serviceCharge = item.serviceCharge;
        let address = item.address;
        let rating = item.rating;
        let description = item.description;
        let contactNo = item.contactNo;


        console.log(name + " " + imageUrl + " " + serviceCharge + " " + address + " " + description + " " + rating + " " + contactNo);
    }
    try {
        for (let item of data) {
            let name = item.name;
            let vendorId = item.vendorId;
            let imageUrl = item.imageUrl;
            let serviceCharge = item.serviceCharge;
            let address = item.address;
            let rating = item.rating;
            let description = item.description;
            let contactNo = item.contactNo;

            console.log(name + " " + imageUrl + " " + serviceCharge + " " + address + " " + description + " " + rating + " " + contactNo);

            await soundVendorDetails.create({
                name,   vendorId,imageUrl, serviceCharge, address, rating, description, contactNo,
            })
        }
        return res.status(200).json({ message: "product added successfully.." })
    } catch (err) {
        console.log(err);
        return res.status(501).json({ message: "Internal server error" })
    }
}
)
router.get('/catalogImages/:vendorId', async (req, res) => {
    const { vendorId } = req.params;
    
    try {
        const images = await Posts.findAll({ where: { vendorId } });
        res.status(200).json(images);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching images' });
    }
});



router.post("/catalogImages", upload.array("images", 10),async (req, res) => {

    console.log(req.files);

    let imageUrl="";
    const paths = await req.files.map((file) => {
        imageUrl = imageUrl+" "+ file.filename
    });
    
    Posts.create({
      vendorId:req.body.vendorId,
        images: "/images/"+imageUrl     
      }).then(
      (result) => {
        res.status(201).send({
          msg: "upload successful",path:result
        });
      },
      
      );
     }
    );
router.get("/viewAllVendors", viewAllVendors)

router.get("/viewprofiles/:id", viewProfiles)

router.post("/review",reviews)
router.get('/reviewdata/:vendorId',reviewData)
router.get('/rating',ratingCount)


export default router;



// router.get("reviewdata/:id", async (request, response) => {
   
//   });

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