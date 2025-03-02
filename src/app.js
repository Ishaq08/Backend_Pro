import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true
}))

app.use(express.json({limit: "16kb"})) // josn config
app.use(express.urlencoded({extended: true, limit: "16kb"})) // url config
app.use(express.static("public")) // static store some (file , images , pdf ) in own server
app.use(cookieParser()) // server => user browser cookies access and set the cookies


export{ app }