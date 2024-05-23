import express from "express";
import { viewAllGarden, createProfile, remove, updateGarden, viewProfile, addInBulk, viewAllInBulk ,signin,signup, resetPassword } from "../controller/gardenDatails.controller.js";

import multer from "multer";
import { checkValidation } from "../Validation/checkValidation.js";
const router = express.Router();

console.log("711111111111111111111111111111111111111111111");

let upload = multer({ dest: "public/images/" })

router.post("/signin", signin);
router.post("/signup", signup);
// router.post('/update-profile/:id', updateProfile);
// router.post('/update', update);

router.post('/resetPassword', resetPassword);

router.post('/addInBulk',addInBulk);

router.post('/addInBulkVendor',addInBulkVendor);

router.get('/viewAll',viewAllInBulk);

router.post("/createProfile", upload.single("image"),  createProfile);
router.post('/update/:id', upload.single("filename"), checkValidation, updateGarden);

router.delete('/remove/:id', remove);
router.get("/viewprofile/:id", viewProfile);

router.get("/viewAllVendors", viewAllGarden);

export default router;


/*
sql
Copy code

INSERT INTO gardendetails (gardenId, title, location, capacity, contactNo, price, imageUrl, description, createdAt, updatedAt)
VALUES
(21, 'Rose Garden', '123 Flower St, Springfield', 50, '123-456-7890', 200, 'https://example.com/rose_garden.jpg', 'A beautiful rose garden perfect for small events.', '2024-05-20 10:00:00', '2024-05-20 10:00:00')
*/