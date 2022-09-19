import express from 'express';
import Connection from './database/db.js ';
import dotenv from 'dotenv';
import {Router} from './router/router.js';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();

dotenv.config();
app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Router);


app.listen(process.env.PORT || 8000,()=>{
    console.log("server Created")
});

Connection(process.env.DB_USERNAME,process.env.DB_PASSWORD);


app.get("/",(req,res)=>{
    res.send("Hello From Backend at port number 8000");
})