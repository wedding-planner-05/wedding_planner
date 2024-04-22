import express from "express";
import { add, addInBulk, remove, updatePhotographer, viewAllByCategory, viewAllPhotographer, viewProfile } from "../controller/photoGrapherDetails.controller.js";
import multer from "multer";
import { checkValidation } from "../Validation/checkValidation.js";

const router = express.Router();
const upload = multer({ dest: "public/images/" });

// http://localhost:3000/photographer-vendor

router.post("/addInBulk",upload.single('imageUrl') ,addInBulk);
router.get("/viewAll", viewAllByCategory);

router.post("/add", upload.single("filename"), checkValidation, add);
router.post('/update/:id', upload.single("filename"), checkValidation, updatePhotographer);
router.delete('/remove/:id', remove);
router.get("/viewprofile/:id", viewProfile);
router.get("/view-all-photographer", viewAllPhotographer);

export default router;

