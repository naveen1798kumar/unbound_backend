import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    cartItems: Array,
    amount: String,
    status: String,
    createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('Order', productSchema);
