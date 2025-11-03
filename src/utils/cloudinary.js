// loacl file path dega that is mere psss server pe file aa gye hai 
import {v2 as v} from "cloudinary"
import fs from "fs"
 
cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });


const uploadOnCloudinary= async (localFilePath) =>{
    try{
        if(!localFilePath) return null
        const response=await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"

        })
        console.log("UPLOADED SUCCESSFULLY",response.url)
        return response

    }
    catch(error){
        fs.unlinkSync(localFilePath) // remove the locally saved local file
        return null
    }
}