import ProductModel from "../models/productModel.js";

// GET ALL PRODUCTS API --> /api/v1/product
export const getProducts = async (req, res, next) => {
    const products = await ProductModel.find()

    res.status(200).json({ 
        success: true,
        message: 'Getting all products',
        products
    });
};

// GET SINGLE PRODUCTS API --> /api/v1/product:id
export const getSingleProduct = async (req, res, next) => {
    // requestedId = req.params.id;
    try {
    const product = await ProductModel.findById(req.params.id)
    res.status(200).json({ 
        success: true,
        message: 'Get single products', 
        product
    });
        
    } catch (error) {
        res.json({ 
        success: false,
        message: `Error Getting Data: ${error.message}`, 
        // product
    })
   
}
}