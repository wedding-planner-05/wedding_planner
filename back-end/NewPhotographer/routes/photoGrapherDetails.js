import express from "express";
import { addInBulkVendor,resetPassword,add, addInBulk, remove, signin, signup, updatePhotographer, updateProfile, viewAllByCategory, viewAllPhotographer, viewProfile } from "../controller/photoGrapherDetails.controller.js";
import multer from "multer";
import { checkValidation } from "../Validation/checkValidation.js";

const router = express.Router();
const upload = multer({ dest: "public/images/" });

// http://localhost:3000/photographer-vendor

router.post("/signin", signin);
router.post("/signup", signup);
// router.post('/update-profile/:id', updateProfile);

router.post("/resetPassword", resetPassword);

router.post("/addInBulk",upload.single('imageUrl') ,addInBulk);

router.post("/addInBulkVendor",addInBulkVendor);
router.get("/viewAll", viewAllByCategory);

router.post("/add", upload.single("filename"), checkValidation, add);

router.post('/update/:id', upload.single("filename"), checkValidation, updatePhotographer);
router.delete('/remove/:id', remove);
router.get("/viewprofile/:id", viewProfile);
router.get("/viewAllVendors", viewAllPhotographer);

export default router;