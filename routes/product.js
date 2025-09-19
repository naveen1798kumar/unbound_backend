import express from 'express';
import { getProducts, getSingleProduct } from '../controller/productController.js';
// import router from './routes/product.js';

const router = express.Router();
router.route('/product').get(getProducts)
router.route('/product/:id').get(getSingleProduct)

export default router;