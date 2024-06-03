import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken"   //jwt(json web token) library tokens k lie use hoti hai
import bcrypt from "bcrypt"  //bcrypt helps to hash our password

//Direct encryption is not possible , so we took help of mongoose hooks like pre
//pre- Before the data gets saved just before that you can use this mongoose hook

const userSchema= new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true //Searching field ke lie index ko true krna hota hai, searching me jyada asaani hoti hai
        },
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        fullname:{
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avatar:{
            type: String,  //cloudinary ka url use krenge, AWS jaisa ek services hai joki images videos ko save krk ek urk de deta hai
            required: true,
        },
        coverImage:{
            type: String, //cloudinary url
        },
        watchHistory:[
            {
                type: Schema.Types.ObjectId,
                ref:"Video",
            }
        ],
        password:{
            type:String,
            required: [true, 'Password is required'],
        },
        refreshToken:{
            type: String,
        }
    },
    {
        timestamps:true    //updatedAt createdAt mil jaega
    }
)

//Problem is that it will change password on every save operation, in case of other save activities too
//For that we have to write if condition
userSchema.pre("save",async function(next){ 
    if(!this.isModified("password")) return next();   // dont change my password eveytime if it is modified then only change
    this.password= await bcrypt.hash(this.password,10)   //(kisko hash kru , rounds )
    next()
}) //whenever you write callback in pre dont write like this ()=>{} coz its problematic coz arrow function dont have this function access means it does not know the context, instead function(){}

//To check whether the encrypted password is correct?
//For this mongoose have methods
//U can also make custom Methods
userSchema.methods.isPasswordCorrect= async function(password){  //Custom method
    return await bcrypt.compare(password,this.password)  //bcrypt can also compare the passwords.
}


//jwt is a bearer token
//Bearer token is like who bears it I will send data to him
//Both are jwt tokens only differs in uses- Access and refresh tokens

//access tokens
userSchema.methods.generateAccessToken = function(){
    return jwt.sign( //Payload
        {
            _id: this._id,   //from mongoDB
            email: this.email,
            username: this.username,
            fullname: this.fullname,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY    //expiry
        }
    )
}

//refresh token
userSchema.methods.generateRefreshToken= function(){
        return jwt.sign( //Payload
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

// modern practices is of two tokens - Refresh and Access tokens
// Why two tokens?
// Both tokens are merely same creation only difference lies in expiry, access tokens are generally short lived while refresh tokens are long lived
// where u need authentication,authorisation we can use access tokens , suppose we have session of 15 min after 15 min ur authorisation will be gone, u have to again write all the authorisations 
// So here comes refresh tokens , it stores authentication in database and gives it to user too
// Validate through access tokens but once you hit an endpoint if refresh token is same as ur authorisation refresh token then hm log mandavali kr lenge , and provide u with a new access token



export const User = mongoose.model("User",userSchema)



