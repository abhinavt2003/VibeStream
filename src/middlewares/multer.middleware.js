// using multer we will create middlewares
// Middlewares can be written directly too
// jaate time mil k jana - Middleware
// file upload ki jrurat hogi there I will use multer
// We have to configure middleware

import multer from "multer";


// We can use disk Storage,memory Storage but we are using our disk storage 

const storage = multer.diskStorage({   // files ko diskStorage me store kro
    destination: function (req, file, cb) {
        cb(null, "./public/temp")      // I will keep all my files in public/temp
    },
    filename: function (req, file, cb) {                  //filename jo bhi rkhna hai
        cb(null, Date.now() + '-' + file.originalname)   //bad practice, will give many files, overwritten //original file return kr dega
    }
})

export const upload = multer({
    storage: storage, 
})