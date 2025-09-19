import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: String, default: 0 },
    images: [{
        image: { type: String, required: true }   
    }],
    category: { type: String, required: true },
    seller: { type: String, required: true },
    stock: { type: String, required: true, default: 0 },
    numOfReviews: { type: String, default: 0 },
    createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('Product', productSchema);