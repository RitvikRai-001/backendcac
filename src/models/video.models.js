import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt" // hooks used pre to encrypt the data

import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema=mongoose.Schema({
    videoFile:{
        type:String, //cloudinary
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    title:{
        type:String, 
    },
    description:{
        type:String, 
        required:true
    },
    duration:{
        type:Number, //cloudinary duration
        required:true
    },
    views:{
        type:Number,
        default:0
    },isPublished:{
        type:Boolean,
        default:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }


},{timestamps:true})
videoSchema.plugin(mongooseAggregatePaginate)
module.exports=mongoose.model("Video",videoSchema)