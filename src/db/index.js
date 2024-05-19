import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB= async() => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/{DB_NAME}`)
        //connectionInstance return an object with many methods
        console.log(`\n MongoDb Connected !! DB HOST :${connectionInstance.connection.host}`);
        // console.log(connectionInstance)
    }catch(error){
        console.log("MONGODB connection FAILED ",error);
        process.exit(1)        //Node.js access deta hai process ka , process jo hmari current application chl rhi hai uska reference hai, Nodejs me pdhna interesting hai

    }
}

export default connectDB