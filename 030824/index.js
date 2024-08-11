import express from "express"
import mongoose from "./db/index.js";

const app=express();
mongoose.connection.on("open",()=>{
    console.log("Database connected")
})
app.use(express.json())
app.get("/",(req,res)=>{
res.send(new Date().toString())
})

  
app.listen(3000,()=>{
    console.log("Faisal")
})
