import { asyncHandler } from "../utils/asyncHandler.js";
import {User} from "../models/user.models.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js";


const registerUser=asyncHandler(async (req,res)=>{
   // get user deatils from frontend (postman)
   // validation-not empty
   // check if user already exist :username,email
   //check for images,avatar
   //upload them to cloudinary, avatar check
   // create user object -- create entry in db
   // remove password and refresh token field from response
   // check for user creation
   // return res 


   // if data is from form or json then in req.body
   const {fullname,email,username,password}=req.body
  //  console.log("email",email)
  //  console.log(fullname,username,password,email)


   if(username===""){
    throw new Error("Username is required");
   }

   if(email===""){
    throw new Error("Email is required");
   }
    if(password===""){
    throw new Error("Password is required");
   }
    if(username===""){
    throw new Error("Username is required");
   }

   const existedUser=await User.findOne({
    $or: [{username},{email}]
   })
   if(existedUser){
    throw new Error("User Already Exists")
   }

   const avatarLocalPath=req.files?.avatar[0]?.path
  //  console.log(avatarLocalPath)
   const coverImageLocalPath=req.files?.coverImage[0]?.path

   if(!avatarLocalPath){
    throw new Error("Avatar is required")

   }
   const avatar=await uploadOnCloudinary(avatarLocalPath)
   const coverImage=await uploadOnCloudinary(coverImageLocalPath)

   if(!avatar){
    throw new Error("Avatar upload unsuccessfull")


   }
   const user=await User.create({
    username:username.toLowerCase(),
    fullname:fullname,
    avatar:avatar.url,
    coverImage:coverImage?.url || "",
    email:email,
    password:password

   })
   const created=await User.findById(user._id).select(
    "-password -refreshToken"
   )
   if(!created){
    throw new Error("Something went wrong while registering the user")
   }

return res.status(201).json({
  success: true,
  message: "User registered successfully",
  user: created
});
   

   




})
export {registerUser}


