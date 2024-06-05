# VibeStream 

It is an Backend Application of an App which is like Youtube and have many features of subscription, users, like, tweet.

- [Model Link](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj?origin=share)

# 1 

1. In backend development we either takes a data and with programming language push it into the database, or we have a query for which we take that data from database and processing it with programming language and return it to frontend
2. A JavaScript based Backend
Data                      File                             Third Party(API)->Email,image upload on AWS
3. File Structures
Package.json                                    .env(Readme,git,lint,prettier etc)
index->DB connects              App->configs,cookies,urlencode                              constants->enums,constants, for remember purpose suppose Aeroplanes have only three types of seats if constants is not there it may be possible that someone will book pilot seat

---> Directory Structure
->DB - Actual code that connects to database
->Models - schema/structure
->Controllers - Methods/functions
->Routers - routing (/signup)
->Middlewares - 
->Utils - Like mail u have to do it many times so define it in Utils
->More(depends)

 # 2

1. Postman is used to get and post response from server.
2. Express is a framework used to listen to responses from computer,devices or from server.
3. Express is fast, unopinionated, minimalist, web frameworks for Node.js
4. Express have two types of styles of JS- common JS and module JS.
const express = require('express')
import express from "express"
5. Computer have virtual ports approx 65k , server will listen on ports.
6. Express do two types of major work req and res.
7. After writing all codes you push it on github and from there upload it on software like Heroku, DigitalOcean and it will give u a url which u will fetch in frontend.

# 3

1. Frontend vercel, netlify pr hi deploy hoga ya backend only heroku, DigitalOcean pr hi deploy hoga thats not true it can be anyhthing it can be deployed with React or it can be anything.
2. We have to first defined the route where we have to get data that is /GitHub and then we have to define ports on which express will listens to. And after port assigning do app.listen and do whatever you want to do with the backend.
3. JavaScript file kbhi commonJS format me aati hai kbhi module.js format me aati dono asynchronous aur synchronous to error aati hai isse bchne ke lie hmko dependencies install krni pdegi -> "type" : "module".
4. Whenever you get a response in array or json then go to jsonformatter and format the code to readable format. Try to read it as a tree structure.
5. There are bundlers like createReactApp/Vite/Parser that helps to bundle coz at last browser only knows HTML, CSS, JS.
6. Axios package fetch jaisa kaam krta hai basically ye library web req me kaam aati hai data kaise aa rha hai handle ho rha hai. Axios use krne se hme frontend me url ko parse krne ki need nhi hoti hai ye apne aap kr leta hai.
CORS is about allowing which request u will allow (Cross Origin) ,if an app is running on port 200 and port 400 both are different. This is differentiated by CORS. 
7. Solutions of CORS is that u can ask developers to whitelist your url, and another solution is proxies.
8. We have handled CORS in Appwrite but there you cant handle like this whitelisting coz there we have installed appwrite package.We have to whitelist it from localhost and then vercel app.
9. Another solution is (good solution) Proxies.
10. If app is created by createReactApp then you can write "proxies":"https:localhost9000".
11. In Vite 
In Vite config,js add 
server:
{
	proxy:{
	'/api': 'https://localhost:3000'	
	},	
}
12. Now when we deploy it in vercel it is proxied and server will think that req is coming from localhost:3000 only.
13. There is a bad practice many company follows they keep the frontend and backend programs in one folder and run build command which creates a build folder by this they saves the production costs. But the problem comes when they have to change something in frontend for that they have to again delete files merged and again run build command.

# 4

Glimpse what we are going to make in Mega Project

# 5 - MongoDb, MoonModeler, 

1. Moon Modeler is used for modelling for MongoDb and Mysql, U will draw diagram and it will automatically generate MongoDB schema.
2. Eraser.io is an alternative for Moon Modeler
3. Start with screen which saves data
4. This 3 lines of code is always same while writing mongoose schema
import mongoose from "mongoose"
const userSchema= new mongoose.Schema({})
export const User= mongoose.model("User",userSchema)   -- Schema is a method which accepts an object
5. MongoDB me jaate hi User == users ho jayega lowercase me aur plural ho jaata hai
6. If we have to take reference from other schema
createdBy:{
	type: mongoose.Schema.Types.ObjectId,
	ref: User
}

# 8 - Nodemon, prettier

1. We temporarily stores images, videos on localStorage then push it to clodinary. So that when connection is lost at least we have that in localStorage.
2. So we create a folder and inside it a folder temp(public/temp) so anything at localStorage will be stored here and then goes to cloudinary. We defines a gitkeep to keep track.
3. .gitignore -> files that u dont want to keep
4. .env -> We took environment variables from system not from files
5. Whenever you change something in server u have to again run this. To prevent this we install nodemon. Nodemon restart the server after you change the files 
6. dev dependancies and main dependancies --> We dont take dev dependancies in the production while in main dependancies it goes inside production
7. Prettier install kr lo, it avoids git conflicts. It is dev dependency. 
8. Prettier ko install krne k baad prettierrc aur prettierignore khud se add krna hota hai.
9. prettierignore me .env wgrh daal deta coz whenever prettier enters env file it alters the env

# 9 - Database connection

1. We will be using MongoDB database.
2. Database connection  -> MongoDB Atlas
3. Database connection is done mainly by two approaches. First approach is that I put whole code in index file and when index file loads the function code in index file runs. Second way is that I make a db folder and write function of connecting database, import this db folder and run the index file.
4. Always remember these two things about database.
Whenever you talks to database problem comes so its better to wrap it in try catch. Or take promises in place of try catch.
Database is always is in different continent.
5. In Express.js, .on listeners are used to handle specific events emitted by the application or the underlying Node.js http server.
6. Node.js access deta hai process ka , process jo hmari current application chl rhi hai uska reference hai, Nodejs me pdhna interesting hai
7. As early as possible configure the .env variables. So we configure the dotenv in our first files that is main file coz it should be available to all other files.
8. Whenver a asynchronous method completes it return a promise.

# 10 - CORS,Proxies, CookieParser

1. We configure express files in app.js
2. after connection start listening to responses thru Express
3. url se jo data aata hai express me to wo req.params se handle kiya jaata hai
4. req.body me data text,forms, json kisi me aa skta hai
5. Sometimes u took data from cookies.
6. cookie Parser middleware - have to install depenedancies
7. To include cors install cors
8. app.use() is used for configurations and middlewares.
9. app.use(cors(
	{
	origin: process.env.CORS_ORIGIN,
	cridentials: true
	}
))
10. Express can parse incoming request bodies in a middleware before your handlers, available under the req.body property. This is typically done using body-parsing middleware like body-parser or the built-in express.json() and express.urlencoded() methods.
11. File upload k lie express ready nhi hai isilie usme multer third party api ka use hota hai
12. CookieParser is used such that I can use cookies from my server to my user browser and do CRUD operations.
13. We need to talk to database for some type of operations everytime, so we create a utils for that purpose.
14. Higher order function ka syntax dekh lena.
15. For this purpose we create an asyncHandler function that is used to talk to database everytime. We dont have to write for everytime we want to talk to database. We create util of asyncHandler for this purpose.
16. Rather than doing try catch and async await we directly use promises and return the response from database
17. Promise.resolve(requestHandler(req, res, next)): This ensures that the requestHandler is executed and wrapped in a promise. If the requestHandler is a function that returns a promise (which is typical for async functions), it will be resolved.
.catch((err) => next(err)): If the promise is rejected (i.e., if the requestHandler throws an error or returns a rejected promise), the error is caught and passed to the next function. This ensures that the error is handled by Express's error-handling middleware.
18. Node.js gives u a class for error handling. error.stack, error.code
19. We use that class and extends it and use as utils for ApiError Handling
20. We dont use core Node.js for req,res , we are using express for that so we have to make our own class for response

# 11 - JWT, bcrypt

1. password:{
	required: [true,'Password is required']  //You can give custom messages with true field
}
2. Mongoose ka aggregate pipeline, ye hmare project ko advance level p le jaega
3. bcrypt is based on core Node.js library while bcyptJS is optimised with JS library. bcrypt is used to hash our password. 
4. bcrypt and jwt both are based on cryptographical algorithms
5. jwt(json web tokens) 
6. Payload - data
7. Direct encryption is not possible so we have to take help of mongoose hooks
8. pre, save hooks
9. pre hook - Before data is getting saved just before that user call and controllers is configured
10. Different events are there for hooks i.e. save,validate,remove,updateOne,deleteOne,init
11. Dont write arrow function in pre hooks because you are taking reference of schema but arrow function dont have the reference of this.
12. To check whether the encrypted password is correct?.For this mongoose have methods.U can also make custom Methods.
13. bcrypt can also compare the passwords. Cryptography use ho rhi hai thats why u have to use await.
14. jwt is a bearer token . Those who bear it we give access to it. 
15. We define environment variable for this. ACCESS_TOKEN_SECRET,ACCESS_TOKEN_EXPIRY and REFRESH_TOKEN_SECRET, REFRESH_TOKEN_EXPIRY

# 12 - File Upload - multer, cloudinary

1. File upload is mainly done on backend. In frontend u can only create forms and login button. 
2. File handling is not done on own server u will use third party services or AWS. Depends on the size.
3. Either create a middleware or utils for this file upload.
4. We will use Cloudinary, multer, expressFileUpload.
5. cloudinary sensitive things will go in .env
6. We will upload file from user through multer like sdk and upload in local server, using cloudinary we will upload the file on cloudinary.
7. We are doing two steps because if connection losts then we at least have files on our local storage.
8. Make a util of cloudinary.
9. import fs from "fs" 
file system - nodeJS library - used in File system   //unlink , link 
10. config these things in .env
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});
11. file system is complex like database so we have to use try catch
12. multer middleware or expressUpload middleware
13. We use multer because we dont have file access in express(req.body and req.params) thats why we have to use multer to upload files on localStorage, express have access to only req and res not files
const storage = multer.diskStorage({
    destination: function (req, file, cb) {       // file is actually the middleware  //cb is callback //multer is uploading the file to disk
        cb(null, "./public/temp")			// I will keep all my files in public/temp
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)   //bad practice, will give many files, overwritten //original file return kr dega
    }
})

# 13 - Router and Controllers

1. Bdi bdi problems ko choti choti problems me break kro.
2. router is taken from express
3. import {Router } from "express"
const router= Router()
export default router
4. Will make userRoutes and then import it in App.js.
5. Since hmne router ko alg kr diya aur ek nya router file bnaya hai hm app.get() nhi kr skte. Hme app.use() ka middleware bnana pdega
6. Since we are going to have many versions of API so we defines routes as /api/v1/users/register.
7. app.use("/api/v1/users",userRouter)  /users pr jayenge aur wha se userRouter p pass ho jayenge routes me, wha /register hit hoga to register kr denge user. 

# 14 - User Regjister controller   

1. Problem hai user ko register karna.
Steps are --
--> Get user details from frontend(postman)
--> Validation - not empty
--> Check if user exists
--> Check for images , check for avatar
--> upload on cloudinary,avatar
--> create user object - create entry in db
--> remove password and refresh token from response
--> check for user creation
--> return res
2.  const existedUser=await User.findOne({          //Since User is created by mongoose it can directly contact with database
        $or: [{ username },{ email }]          //operators is getting introduced here, we can invoke them using $  //If I want to check both email and usename then use operators
    })   // this functions is telling that find me one user of the given username and email firstly found result will be returned

3. We know that we have all data in req.body but since we have defined a middleware in routes, middleware added some files into it and give the access of req.files. 
4.let avatarLocalPath;
    if (req.files && Array.isArray(req.files.avatar) && req.files.avatar.length > 0) {
        avatarLocalPath = req.files.avatar[0].path    //avatar[0] coz first property have access of path in multer coz we have told multer that take the destination and return us the original Filename
    
5. Since uploading on cloudinary will take time we have to write await from our time inspite of being asyncHandler in our function we used async in our arguments for these type of operations only. We have to explicitely write this await async. 
6. User is created by mongoose means it can directly talk to db so it will create an entry in db by create method
7. //7.remove password and refresh tokens
    //MongoDb implicitely define an id(_id field) along with ur data entries
    const createdUser= await User.findById(user._id).select(    //Find user through id if found user is successfully created otherwise not
        "-password -refreshToken"           //we can remove password and refresh token with objects but here we can do it easily with chaining
    )       //weird syntax
8. Send response thru APIresponse utils

# 15 - Access Refresh Tokens, Middlewares and cookies in Backend

1. Acces Token is generally short lived where as refresh tokens are long lived.
2. Access token is used for authentication , if ur login session expires then again u have to write details and login , so here comes refresh tokens.
3. Refresh tokens is stored in database as well as given to users. So user dont have to write password every time, just hit an endpoint and ur user refresh token and database refresh tokens is compared and if it is same then login and new access token will be given to user.
4. findOne in mongoDb returns the data whichever it will find first
5. we are not writing user 'u' in capital because we create it as capital when it is mongoDb object but it is created by us not by mongoDb.
6. //Access and refresh token creation, this is so common so we gonna create a method for this 
const generateAccessAndRefreshTokens= async(userId) =>{
    try{
        const user= await User.findById(userId)
        const accessToken=await  user.generateAccessToken()
        const refreshToken=await user.generateRefreshToken()
        //access token we will give to user but we need to save refresh tokens to database
        user.refreshToken= refreshToken
        await user.save({validateBeforeSave: false})      //mongoose will kick in too many methods for save thats why we need to tell validateBeforeSave as false

        return {accessToken , refreshToken}
    }catch(error){
        throw new ApiError(500,"Something went wrong while generating access and refresh tokens")
    }
}
7. I created a user but user refreshToken is empty coz I created user first then called the function for user so I have to again configure the user with refreshToken. Now I can again call the database query or can update the user, if database query is a expensive operation then prefer updating the user
8. By default cookies can be modified by anyone in frontend but if you true the httpOnly and secure field then it can only be modifiable by server 
    const options = {
        httpOnly: true,
        secure: true
	}
9. For logout delete cookies and remove access and refresh tokens of the current login.
10. We can design our custom middleware i.e. auth middleware it will verify whether user exists or not.
11. I will verify user access token and add a new field req.user.
12. this removes the field from the document, I dont want refreshtokens coz user is logout. 
13. For doing logout we need to first authorise we need to see that user is logged in, after checking user is loggedin , we will get the access of requser, try to logout by unset the refresh token and giving a new refreshToken to the user

# 16 - Access and Refresh Tokens in Backend

1. accessToken and refreshToken is designed as user dont have to give email and password every time ,
   accessToken is shortlived, refreshToken will be stored in database 
   if user is timed out then hit a endpoint and get your accessToken refreshed and get a new refresh token, 
   now this refreshed token is matched with the refreshToken in database
   if same then start the session again 


# 17 

1. Will write the changeCurrentPassword controller.
2. If user can change password means user is loggedin , means we have used an middleware , means we have access of req.user.
3. Before saving pre middleware will run validating the password and required fields but I dont want pre to check all fields so I will use {validateBeforeSave: false}
4. Get current user
5. updateAccountDetails
   const user=await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
                fullname,
                email,
            }
        },
        {new:true}
    ).select("-password")
    Find user and use operator to set fullname ,email and return the new values and if you dont want to select certain field then select that.
6. Whenever you are doing something on files u need to do it thru multer middleware and then upload it in cloudinary.
7. updateAvatar and updateCoverImage we will use middleware multer and update , both codes are same.