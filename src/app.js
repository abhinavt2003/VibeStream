import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))    //cors use krne ka syntax

app.use(express.json({limit:"10kb"}))

app.use(express.urlencoded({extended: true, limit:"10kb"}))

app.use(express.static("public"))   //assets like images,favicons we will keep it in public folder

//cookieParser server k browser se cookies access aur set kr ske, cookies p crud operation krna hai
app.use(cookieParser())



export { app }