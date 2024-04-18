import express from "express";
import {addDress,addDressInBulk,viewAlldresses,viewByColour,viewByPrice} from "../controller/vendorfunc.controller.js";
import multer from "multer";


let upload = multer({desc : "public/images"});

const router = express.Router();


router.post("/adddress",upload.single("imageurl"),addDress); 
router.post("/addDressInBulk",addDressInBulk);
router.get("/viewalldresses",viewAlldresses); 

router.post("/viewbyColour",viewByColour);


export default router;


