import express from "express";
import { setOrder, getOrder, updateOrder, removeOrder } from "../controller/controller.js";


export const Router = express.Router();

Router.get("/",(req,res)=>{
    res.writeHead(200, { 'Content-Type':'text/html'});
      res.end("<div><h2>This is the assignment for thynklabs internship by Paras Kumar (Mobile No-8445840329) applied through internshala.</h2></div>");
});
Router.post("/setOrder",setOrder);
Router.post("/getOrder",getOrder);
Router.post("/updateOrder",updateOrder);
Router.post("/removeOrder",removeOrder);