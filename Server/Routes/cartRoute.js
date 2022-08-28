import { Router } from "express";
import {
  getCartData,
  incrementQty,
  postToCart,
  decrementQty,
  deleteProduct,
} from "../Controllers/cartController.js";
const router = Router();

router.get("/:id", getCartData);
router.post("/", postToCart);
router.put("/inc/:id", incrementQty);
router.put("/dec/:id", decrementQty);
router.delete("/:id", deleteProduct);
export default router;
