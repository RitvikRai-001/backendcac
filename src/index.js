import dotenv from "dotenv";
dotenv.config(); // this is veery important 
import {app} from './app.js '
// npm i cookie-parser core


import mongoose from "mongoose"
import express from "express"
import connectDB from "./db/index.js"

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is runnning at port ${process.env.PORT} `)
    })
})
.catch((err)=>{
    console.log("MONGODB CONNECTION FAILED",err)

})
// import dotenv from "dotenv"
// import { DB_NAME } from "./constants.js"

// dotenv.config()
// const app = express()

// ;(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     app.on("error", (error) => {
//       console.log("ERROR", error)
//       throw error
//     })
//     app.listen(process.env.PORT, () => {
//       console.log(`✅ APP is listening on port ${process.env.PORT}`)
//     })
//   } catch (error) {
//     console.log("❌ ERROR:", error)
//   }
// })()

//src--controllers routes models middleware db utils 


