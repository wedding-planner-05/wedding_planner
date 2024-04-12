import express from "express";
import { deleteVendor, signin, update, deleteUser, viewUserList, viewVendorList } from "../controller/admin.controller.js";
import { body } from "express-validator";
const router = express.Router();

router.post("/signin", signin);
router.put('/update/:id', update);
router.delete('/delete-vendor', deleteVendor);
router.delete('/delete-user', deleteUser);
router.get("/user-list", viewUserList);
router.get("/vendor-list", viewVendorList);
// router.get("/viewprofile/:id", viewProfile);
// router.delete('/remove/:id', removeFromCart);

export default router;

