//require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
// import mongoose  from "mongoose";
// import {DB_NAME} from "./constant";
import connectDB from "./db/index.js";

// dotenv.config({
//     path:'./env'
// })
dotenv.config({ path: './env' });
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed !! ",err);
})


/* import express from "express";
const app=express()


(async()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",()=>{
        console.log("ERRROR:",error)
        throw error
       })
       app.listen(process.env.PORT,()=>{
        confirm.log(`APP is listning on port ${process.env.PORT}`);
       })
    } catch (error) {
        console.error("ERROR:",error);
        throw err
    }
})() */