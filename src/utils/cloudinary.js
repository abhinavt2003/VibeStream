// Using multer we upload videos images on cloudnary, cloudinary is sdk
// it uploads files on its server
// we use multer to take file from user and temporarily stores it on multer
// Using cloudinary we take that file from local storage and uploads it on server

import {v2 as cloudinary} from cloudinary   //v2 as koi bhi naam de skte ho
import fs from "fs"   //fs is file system


cloudinary.config({     //Cridentials
    cloud_name: "process.env.CLOUDINARY_CLOUD_NAME", 
    api_key: "process.env.CLOUDINARY_API_KEY", 
    api_secret: "process.env.CLOUDINARY_API_SECRET" 
});


//Node.js have file system , helps us to read ,write, give permissions and others
//We need file path
//unlink path -> If path refers to symbolic link ,then the link is removed without affecting the file or directory to which that link refers //Basically link delete krne k kaam me aata hai

const uploadOnCloudinary= async(localFilePath)=>{
    try{
        if(!localFilePath) return null;
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            //options of cloudinary -> resource option
            resource_type: "auto"
        })
        //file has been uploaded successsfully
        console.log("file is uploaded on cloudinary",
            response.url);
            return response
    }catch(error){
        // file has not been uploaded successfully
        fs.unlinkSync(localFilePath)   //Remove the locally saved temporary file as the upload operation got failed
        return null
    }
}




export {uploadOnCloudinary}