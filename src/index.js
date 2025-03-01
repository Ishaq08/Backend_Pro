// require('dotenv').config({ path: './env' });

import dotenv from 'dotenv';

import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()






/*
// first apporch
import express from "express"
const express = express()
    
(async() => {
    try {
      await  mongoose.connect(`${process.env.MONDOGDB_URL}/ ${DB_NAME}`)
        app.on("errror", () => {
            console.log("Err:", error);
            throw error;
        })
        
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port${process.env.PORT} `);
        })
    } catch (error) {
        console.log("Error", error);
        throw error
    }
})()
    */