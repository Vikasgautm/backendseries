import mongoose from "mongoose";
import { DB_NAME } from "../constant.js  ";
const connectDB=async()=>{
    try {
        // const mongoURI = `${process.env.MONGODB_URI}/${DB_NAME}`;
        // console.log(`Connecting to MongoDB with URI: ${mongoURI}`);
       const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n MongoDB connected !! DB HOST :${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB CONNECTION failed",error);
        process.exit(1)
        
    }
}

export default connectDB