import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDB=async ()=>{
    try{
        console.log("MONGODB_URI:", process.env.MONGODB_URI);

        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB Connected `)

    }
    catch(error){
        console.log("ERROR",error)

    }
}
export default connectDB

// controllers 
// db middleware routes models utils