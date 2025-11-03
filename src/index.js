import dotenv from "dotenv";
dotenv.config(); // this is veery important 



import mongoose from "mongoose"
import express from "express"
import connectDB from "./db/index.js"

connectDB()
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


