import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))    //cors use krne ka syntax

// Express can parse incoming request bodies in a middleware before your handlers, available under the req.body property. This is typically done using body-parsing middleware like body-parser or the built-in express.json() and express.urlencoded() methods.


app.use(express.json({limit:"16kb"}))    //json data is coming and limit is set to 10 kb

app.use(express.urlencoded({extended: true, limit:"16kb"}))   //url is coming with limit 10kb   //extended will help you to give objects inside objects

app.use(express.static("public"))   //assets like images, favicons we will keep it in public folder

//cookieParser server k browser se cookies access aur set kr ske, cookies p crud operation krna hai
app.use(cookieParser())


//Routes import
import userRouter from './routes/user.routes.js'

//routes declaration
// We were using app.get() but we cant use it here, previously it was legit coz we were writing routes and controllers at same place 
// But now we have shifted router so we have to use middlewares
app.use("/api/v1/users",userRouter)

//http://localhost:8000/api/v1/users/register

export { app }