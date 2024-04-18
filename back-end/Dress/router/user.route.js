

import express from "express";
import {signUp,signIn, update} from "../controller/user.controller.js";
import { viewByColour, viewByPrice } from "../controller/vendorfunc.controller.js";
const router = express.Router();


router.post("/signup",signUp);
router.post("/signIn",signIn);
router.post("/update",update);
router.post("/viewbyprice",viewByPrice); 
router.post("/viewbycolour",viewByColour);


export  default router;

