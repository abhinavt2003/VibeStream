// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from './app.js'


dotenv.config({
    path: './.env'
})





// const app = new express();

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,() =>{
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
    app.on("error",()=>{
        console.log("ERROR: ",error);
        throw error
    }) 
})
.catch((err)=>{
    console.log("MONGO db connection failed !!! ",err);
})


/*  //First approach

// import express from "express"
// import connectDB from "./db";

//IIFE function (iske andr async await)() async await isilie lgate hai kyonki database hmara hmesa dusre continent me hota hai
//Lane me time lgta hai that's why we use async/await function

const app= express()

;(async () => {                        //Start me ; isilie lgate hai kyunki agr koi bhula hua error hoga ; ka wo thik ho jaega
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",()=>{
            console.log("ERROR: ",error);
            throw error
        })  //Express ka event listener hai aage pdhenge

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port${process.env.PORT}`); //Express k basic starting me pdha tha
        })
    }catch(error){
        console.log("ERROR: ",error);
        throw error;
    }
})()

*/


