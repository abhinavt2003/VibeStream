// using multer we will create middlewares
// Middlewares can be written directly too
// jaate time mil k jana - Middleware
// file upload ki jrurat hogi there I will use multer
// We have to configure middleware

import multer from "multer";


// We can use disk Storage,memory Storage but we are using our disk storage 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)   //bad practice, will give many files, overwritten //original file return kr dega
    }
})

export const upload = multer({
     storage, 
})