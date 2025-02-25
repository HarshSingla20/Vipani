import express from 'express'
import { createCheckoutSession } from '../controllers/payment.controller'
import { protectRoute } from '../middleware/auth.middleware'

const router = express.Router()

router.post("/create-checkout-session", protectRoute, createCheckoutSession)
router.post("/checkout-success", protectRoute, createCheckoutSession)

export default router