const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Backend Working")
});

mongoose.connect(process.env.MONGO_URI).then(()=>{console.log("Mongo Connected")}).catch(err=>console.log(err));

app.listen(3000,()=>console.log("Server Running "))