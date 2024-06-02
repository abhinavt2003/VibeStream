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

# 5

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

# 8

1. We temporarily stores images, videos on localStorage then push it to clodinary. So that when connection is lost at least we have that in localStorage.
2. So we create a folder and inside it a folder temp(public/temp) so anything at localStorage will be stored here and then goes to cloudinary. We defines a gitkeep to keep track.
3. .gitignore -> files that u dont want to keep
4. .env -> We took environment variables from system not from files
5. Whenever you change something in server u have to again run this. To prevent this we install nodemon. Nodemon restart the server after you change the files 
6. dev dependancies and main dependancies --> We dont take dev dependancies in the production while in main dependancies it goes inside production
7. Prettier install kr lo, it avoids git conflicts. It is dev dependency. 
8. Prettier ko install krne k baad prettierrc aur prettierignore khud se add krna hota hai.
9. prettierignore me .env wgrh daal deta coz whenever prettier enters env file it alters the env
