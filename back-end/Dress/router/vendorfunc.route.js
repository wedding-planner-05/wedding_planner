import express from "express";
import {addDress,addDressInBulk,viewAlldresses,viewByColour,viewByPrice,signUp,signIn,resetPassword,addInBulkVendnor} from "../controller/vendorfunc.controller.js";
import multer from "multer";

let upload = multer({desc : "public/images"});

const router = express.Router();


<<<<<<< HEAD
router.post("/adddress",upload.single("imageurl"),addDress); 

=======
router.post("/createProfile",upload.single("imageurl"),addDress); 
>>>>>>> 10a444711c1cab0024827a40e257f7929261d534
router.post("/addDressInBulk",addDressInBulk);
router.post("/addInBulkVendor",addInBulkVendnor);

router.get("/viewAllVendors",viewAlldresses); 
router.post("/signup",signUp); 
router.post("/signin",signIn);

router.post("/resetPassword",resetPassword);

router.post("/viewbyColour",viewByColour);


export default router;


