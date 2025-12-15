const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const task = require("./models/task");


require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Backend Working")
});

app.post("/addTask",async (req,res)=>{
    try{
        let newTask = new task(req.body);
        newTask.save();

    }catch(e){

    }
});
mongoose.connect(process.env.MONGO_URI).then(()=>{console.log("Mongo Connected")}).catch(err=>console.log(err));

app.listen(4000,()=>console.log("Server Running "))