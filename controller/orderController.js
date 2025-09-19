import orderModel from "../models/orderModel.js";

export const createOrder = async (req, res, next) => {
    const cartItems = req.body
    const amount = Number(cartItems.reduce((acc, item)=>(acc +
        item.product.price * item.qty
    ), 0)).toFixed(2);
    // console.log(amount, "AMOUNT");
    const status = 'Pending'
    
    const orderPlaced = await orderModel.create({cartItems, amount, status})

    // orderModel.create(req.body)
    // console.log(req.body);
    
    
    res.status(200).json({ 
        success: true,
        message: 'Create new order',
        orderPlaced
    });
}