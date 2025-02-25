import express from "express"
import { addToCart } from "../controllers/cart.controller.js"

const router = express.Router()

router.post("/", protectRoute, getCartProducts)
router.post("/", protectRoute, addToCart)
router.delete("/", protectRoute, removeAllFromCart)
router.put("/:id", protectRoute, updateQuantity)

export default router