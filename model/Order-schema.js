import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    orderId:{
        type:String
    },
    productName:{
       type:String,
    },
    productId:{
        type:String,
    },
    customerName:{
         type:String,
    },
    customerId:{
        type:String,
    },
    quantity:{
        type:Number,
    },
    shippingAddress:{
        type:String,
    },
    orderTime:{
        type:String
    }
}) 

const Order = mongoose.model('Order',orderSchema);

export default Order;