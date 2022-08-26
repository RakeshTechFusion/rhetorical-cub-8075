import { Router } from "express";
import { getAddress, postAddress } from "../Controllers/addressController.js";
const router = Router();

router.get("/:id", getAddress);
router.post("/", postAddress);

export default router;