import express from "express";
import {addDress,addDressInBulk,viewAlldresses,viewByColour,viewByPrice,signUp,signIn,resetPassword,addInBulkVendnor} from "../controller/vendorfunc.controller.js";
import multer from "multer";https://github.com/wedding-planner-05/wedding_planner/pull/84/conflict?name=back-end%252FDress%252Frouter%252Fvendorfunc.route.js&ancestor_oid=80a909de4ca08dcf8cb566678ac1374f5d3aa03a&base_oid=9422a38c14e10715b72d21d9e057a34b83c40126&head_oid=73486ce2ea1920c8be5d1c2ca56cbe2e3e6e8435

let upload = multer({desc : "public/images"});

const router = express.Router();

router.post("/createProfile",upload.single("imageurl"),addDress); 

router.post("/addDressInBulk",addDressInBulk);
router.post("/addInBulkVendor",addInBulkVendnor);

router.get("/viewAllVendors",viewAlldresses); 
router.post("/signup",signUp); 
router.post("/signin",signIn);

router.post("/resetPassword",resetPassword);

router.post("/viewbyColour",viewByColour);


export default router;


