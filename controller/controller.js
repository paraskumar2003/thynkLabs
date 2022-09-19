import Order from "../model/Order-schema.js";
import { v4 as uuidv4 } from 'uuid';


export const setOrder = async(req,res)=>{
    try{
     console.log(req.body);
     const id =await uuidv4();
     let obj = {
        orderId:id,
        customerId:req.body.customerId,
        customerName:req.body.customerName,
        productId:req.body.productId,
        productName:req.body.productName,
        quantity:req.body.quantity,
        shippingAddress:req.body.shippingAddress,
        orderTime:req.body.orderTime
     };
     const newOrder = new Order(obj);
     await newOrder.save();
     res.json({reponse:'ok',data:newOrder});
    }catch(error){
        res.json({data:error.message})
    }
};

export const getOrder = async(req,res)=>{
    try{
       let order = await Order.find({orderId:req.body.orderId});
       console.log(order);
       res.json({response:'ok',data:order});
    }catch(error){
       res.json({response:error,data:error.message});
    }
}
export const updateOrder = async(req,res)=>{
    try{
       let order = await Order.updateOne({orderId:req.body.orderId},{
        customerId:req.body.customerId,
        customerName:req.body.customerName,
        productId:req.body.productId,
        productName:req.body.productName,
        quantity:req.body.quantity,
        shippingAddress:req.body.shippingAddress,
        orderTime:req.body.orderTime
       });
       let newOrder = await Order.findOne({orderId:req.body.orderId});
       res.json({response:'ok',action:order,data:newOrder});
    }catch(error){
       res.json({response:error,data:error.message});
    }
}
export const removeOrder = async(req,res)=>{
    try{
       let order = await Order.deleteOne({orderId:req.body.orderId});
       console.log(order);
       res.json({response:'ok',data:order});
    }catch(error){
       res.json({response:error,data:error.message});
    }
}