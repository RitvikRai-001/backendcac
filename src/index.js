import mongoose from "mongoose"
import express from "express"
import dotenv from "dotenv"
import { DB_NAME } from "./constants.js"

dotenv.config()
const app = express()

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



