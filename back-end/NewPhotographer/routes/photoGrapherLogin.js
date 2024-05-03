import express from "express";
import multer from "multer";
import { checkValidation } from "../Validation/checkValidation.js";
import { signin, signup, updateProfile } from "../controller/photoGrapherLogin.controller.js";

// http://localhost:3000/photographer-vendor
const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.post('/update-profile/:id', updateProfile);

export default router;

