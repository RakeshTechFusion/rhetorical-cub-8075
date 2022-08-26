import { Router } from "express";
import {
  getCartData,
  incrementQty,
  postToCart,
  decrementQty,
  deleteProduct,
} from "../Controllers/cartController";
const router = Router();

router.get("/:id", getCartData);
router.post("/", postToCart);
router.put("/:id/inc", incrementQty);
router.put("/:id/dec", decrementQty);
router.put("/:id", deleteProduct);
export default router;
