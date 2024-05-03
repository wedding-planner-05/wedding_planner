import express from "express";
import {addDress,addDressInBulk,signIn,signUp,viewAlldresses,viewByColour,viewByPrice} from "../controller/vendorfunc.controller.js";
import multer from "multer";


let upload = multer({desc : "public/images"});

const router = express.Router();

router.post("/signup",signUp); 
router.post("/signin",signIn); 
router.post("/adddress",upload.single("imageurl"),addDress); 
router.post("/addDressInBulk",addDressInBulk);
router.get("/viewAllVendors",viewAlldresses); 

router.post("/viewbyColour",viewByColour);


export default router;


