import express from "express";
import { signin, signup, updateProfile } from "../controller/gardenLogin.controller.js";

const router = express.Router();
// http://localhost:3000/vendore/

router.post("/signin", signin);
router.post("/signup", signup);
router.post('/update-profile/:id', updateProfile);

export default router;