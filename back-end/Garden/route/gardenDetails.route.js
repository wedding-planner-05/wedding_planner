import express from "express";
import { viewAllGarden, add, remove, updateGarden, viewProfile, addInBulk, viewAllInBulk ,signin,signup, updateProfile } from "../controller/gardenDatails.controller.js";
import multer from "multer";
import { checkValidation } from "../Validation/checkValidation.js";
const router = express.Router();


let upload = multer({ dest: "public/images/" })

router.post("/signin", signin);
router.post("/signup", signup);
// router.post('/update-profile/:id', updateProfile);
router.post('/update', updateProfile);


router.post('/addInBulk',addInBulk);
router.get('/viewAll',viewAllInBulk);

router.post("/add", upload.single("filename"), checkValidation, add);
router.post('/update/:id', upload.single("filename"), checkValidation, updateGarden);

router.delete('/remove/:id', remove);
router.get("/viewprofile/:id", viewProfile);

router.get("/viewAllVendors", viewAllGarden);

export default router;