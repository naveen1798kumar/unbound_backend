import express from 'express';
import { createOrder } from '../controller/orderController.js';
const router = express.Router();

router.route('/order').post(createOrder)

export default router;