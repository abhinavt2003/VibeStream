import { asyncHandler } from "../utils/asyncHandler.js";

//method to register user
const registerUser= asyncHandler( async (req,res) =>{
    res.status(400).json({ // We decide that what will be the response in postman 200-OK 400-Bad Request
        message:"Chai aur Code"
    })
})

export {registerUser,}