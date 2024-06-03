//Second way of connecting database , We define a new db folder and export it to main index.js after connecting database run index.js file 


import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB= async() => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/{DB_NAME}`)   //mongoose will give an return object we name the object
        //connectionInstance return an object with many methods
        console.log(`\n MongoDb Connected !! DB HOST :${connectionInstance.connection.host}`);      //Its done to know the host , somtimes by mistake we get connected to another server of testing, development but we want production server, this helps to check the server host. 
        // console.log(connectionInstance)
    }catch(error){
        console.log("MONGODB connection FAILED ",error);
        process.exit(1)        //Node.js access deta hai process ka , process jo hmari current application chl rhi hai uska reference hai, Nodejs me pdhna interesting hai
    }
}

export default connectDB