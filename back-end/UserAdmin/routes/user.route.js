import express from "express";
import { signin } from "../controller/user.controller.js";
import { checkValidation } from "../Validation/checkValidation.js";

const router = express.Router();

router.post("/signin", signin);
// router.post("/signup", checkValidation, signup);

// router.post('/update/:id', update);
// router.delete('/delete-vendor',deleteVendor);

export default router;
