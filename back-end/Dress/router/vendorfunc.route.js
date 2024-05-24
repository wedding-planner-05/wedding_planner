import express from "express";
import {addDress,addDressInBulk,viewAlldresses,viewByColour,viewByPrice,signUp,signIn,resetPassword,addInBulkVendnor,viewprofile} from "../controller/vendorfunc.controller.js";
import multer from "multer";

let upload = multer({dest : "public/images"});

const router = express.Router();


router.post("/createProfile",upload.single("image"),addDress); 

router.post("/addDressInBulk",addDressInBulk);
router.post("/addInBulkVendor",addInBulkVendnor);
router.get("/viewAllVendors",viewAlldresses); 
router.post("/signup",signUp); 
router.post("/signin",signIn);
router.get("/viewprofile/:id",viewprofile)
router.post("/resetPassword",resetPassword);

router.post("/viewbyColour",viewByColour);


export default router;


