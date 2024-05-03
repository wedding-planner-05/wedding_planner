import express from "express";
import {addDress,addDressInBulk,viewAlldresses,viewByColour,viewByPrice,signUp,signIn} from "../controller/vendorfunc.controller.js";
import multer from "multer";


let upload = multer({desc : "public/images"});

const router = express.Router();


router.post("/adddress",upload.single("imageurl"),addDress); 
router.post("/addDressInBulk",addDressInBulk);
router.get("/viewAllVendors",viewAlldresses); 
router.post("/signup",signUp); 
router.post("/signin",signIn); 
router.post("/viewbyColour",viewByColour);


export default router;


