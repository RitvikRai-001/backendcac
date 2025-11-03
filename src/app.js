// npm config set proxy http://edcguest:edcguest@172.31.100.25:3128
// npm config set https-proxy http://edcguest:edcguest@172.31.100.25:3128
// git config --global http.proxy http://edcguest:edcguest@172.31.100.25:3128
// git config --global https.proxy http://edcguest:edcguest@172.31.100.25:3128
// for switching between proxy

import path from 'path'
import express from 'express'
import cors from "cors"
import cookieParser from 'cookie-parser'
const app=express()


app.use(cookieParser())
app.use(express.json({
    limit:"16kb"
}))
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cors({
    origin:process.env.CORS_ORIGIN
}))

//middleware





export {app}

