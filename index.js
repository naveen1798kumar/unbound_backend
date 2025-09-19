import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import cors from 'cors';

import productRoutes from './routes/product.js';
import orderRoutes from './routes/order.js';
import authRoutes from './routes/auth.js';
import { connectDatabase } from './config/connectDatabase.js';

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

const app = express();

// mongoose.connect()
connectDatabase()

// Middleware to parse JSON
app.use(express.json());

// ✅ Configure CORS
const allowedOrigins = [
  "http://localhost:5173",                        // Vite local dev
  "https://unbound-frontend-nine.vercel.app",     // Vercel deployed frontend
];

// app.use(cors());
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // allow cookies/authorization headers
  })
);

// Mount routes
app.use('/api', productRoutes);
app.use('/api', orderRoutes);

app.use('/api', authRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT} for ${process.env.NODE_ENV} `);
});