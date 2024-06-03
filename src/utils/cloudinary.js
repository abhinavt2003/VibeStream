import {v2 as cloudinary} from "cloudinary"  //cloudinary se lao // As v2 is not a good name u can give a custom name by writing as
import fs from "fs"    // file system - nodeJS library - used in File system   //unlink , link 

//config these things in .env
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

//file system is complex like database so we have to use try catch
const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"      // cloud options
        })
        // file has been uploaded successfull
        //console.log("file is uploaded on cloudinary ", response.url);  //after upload we will have the url
        //After file has been uploaded then unlink means delete it from local storage
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}



export {uploadOnCloudinary}