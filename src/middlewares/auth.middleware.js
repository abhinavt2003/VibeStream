import { User } from "../models/user.models.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"


//This middleware will verify whether user exists or not
export const verifyJWT = asyncHandler(async(req,_,next)=>{
   try {
     //req have access of cookies , I had given it through cookieParser
     const token=req.cookies?.accessToken || req.header.authorization?.replace("Bearer ","")
 
     if(!token){
         throw new ApiError(401,"Unauthorised request")
     }
     //when token is correct
 
     const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
 
     const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
     if(!user){
         throw new ApiError(401,"Invalid access token")
     }
 
     req.user = user;
     next()       //Next will check next routes
   } catch (error) {
        throw new ApiError(401,error?.message || "Invalid access token")
   }

})