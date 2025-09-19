import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Product from '../models/productModel.js';

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env variables
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

// Read products.json
const products = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'data', 'products.json'), 'utf-8')
);

// Connect to MongoDB and import products
const importData = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    await Product.deleteMany(); // Optional: clear existing products
    await Product.insertMany(products);
    console.log('✅ Products imported!');
    process.exit();
  } catch (err) {
    console.error('❌ Import failed:', err);
    process.exit(1);
  }
};

importData();