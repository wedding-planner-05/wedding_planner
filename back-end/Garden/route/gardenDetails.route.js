import express from "express";
import { viewAllGarden, add, remove, updateGarden, viewProfile, addInBulk, viewAllInBulk } from "../controller/gardenDatails.controller.js";
import multer from "multer";
import { checkValidation } from "../Validation/checkValidation.js";
const router = express.Router();

// http://localhost:3000/garden-vendor/
let upload = multer({ dest: "public/images/" })

router.post('/addInBulk',addInBulk);
router.post('/viewAll',viewAllInBulk);

router.post("/add", upload.single("filename"), checkValidation, add);
router.post('/update/:id', upload.single("filename"), checkValidation, updateGarden);
router.delete('/remove/:id', remove);
router.get("/viewprofile/:id", viewProfile);
router.get("/view-all-garden", viewAllGarden);

export default router;