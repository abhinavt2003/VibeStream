import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.models.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

//method to register user
const registerUser= asyncHandler( async (req,res) =>{
    // get user details from frontend -> frontend means data from postman 
    // validation - not empty
    // check if user already exists : check via username or email
    // check for images , check for avatar
    // upload them on cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation 
    // return response

    //Get user details from frontend
    const {fullname,email,username,password}=req.body  //If data is coming from form or json then u will get through , for url we will see later
    // console.log("email: ",email);
    
    //Validation
    if(
        [fullname,email,username,password].some((field)=> field?.trim()==="")       //some accepts two or three arguments return the value when it is true or until the end of the array
        
        // The array [fullname, email, username, password] contains four fields that you likely want to validate.
        // The .some() method iterates over this array, applying the arrow function (field) => field?.trim() == "" to each element.
        // For each field in the array:
        // field?.trim() is called. If field is null or undefined, the optional chaining operator (?.) ensures that undefined is returned instead of causing an error.
        // The trim() method removes any leading or trailing whitespace from the field.
        // The result of trim() is compared to an empty string ("").
        // If any field in the array, after trimming, is an empty string, the condition field?.trim() == "" will be true for that field.
        // The .some() method will then return true if at least one field satisfies the condition. Otherwise, it will return false.
    ){
        throw new ApiError(400,"All fields are required")
    }


    //check if user already exists
    const existedUser=await User.findOne({
        $or: [{ username },{ email }]          //operators is getting introduced here, we can invoke them using $
    })
    
    if(existedUser){
        throw new ApiError(409,"User with email and username already exists")  //Direct create a object from ApiError and pass attributes to it thats why we created this ApiError in utils to minimise our task
    }
    console.log(req.files);

    //checks for images, checks for avatar
    //file ka naam avatar hai check in user.routes
    // const avatarLocalPath= req.files?.avatar[0]?.path;  //multer gives access to the files //avatar[0] k pass property hai path ki which will tell the path, gives the original name
    // const coverImageLocalPath=req.files?.coverImage[0]?.path;

    let coverImageLocalPath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
        coverImageLocalPath = req.files.coverImage[0].path
    }
    let avatarLocalPath;
    if (req.files && Array.isArray(req.files.avatar) && req.files.avatar.length > 0) {
        avatarLocalPath = req.files.avatar[0].path
    }
    // if(!avatarLocalPath){
    //     throw new ApiError(400,"Avatar file is required");
    // }

    //upload on clodinary ,avatar
    const avatar= await uploadOnCloudinary(avatarLocalPath)  //this step will take time ,thats why we had put aysnc in starting async(req,res)
    const coverImage= await uploadOnCloudinary(coverImageLocalPath)
    //again check for avatar
    if(!avatar){
        throw new ApiError(400,"Avatar file not uploaded on Cloudinary");
    }

    //create user object - create db in user
    const user= await User.create({
        fullname,
        avatar: avatar.url,         //I want that only url of the object should be saved in db instead of whole object data
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
    })

    //remove password and refresh tokens
    //MongoDb implicitely define an id(_id field) along with ur data entries
    const createdUser= await User.findById(user._id).select(    //Find user through id if found user is successfully created otherwise not
        "-password -refreshToken"           //we can remove password and refresh token with objects but here we can do it easily with chaining
    )       //weird syntax
    
    //check for user creation
    if(!createdUser){
        throw new ApiError(500,"Something went wrong while registering the user");
    }

    //return response
    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered successfully")
    )

})

export {registerUser,}