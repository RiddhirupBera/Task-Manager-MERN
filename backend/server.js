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
        await newTask.save();
        return res.status(201).json({
            message: "Task added successfully",
            task: newTask
        });

    }catch(e){
        return res.status(500).json({
            message: "Error occurred",
            error : e.message
        });
    }
});

app.put("/updateTask/:id",async(req,res)=>{
    try{
        let id = req.params.id;
        const updates = req.body;

        const updatedTask = await task.findByIdAndUpdate(
            id,
            updates,
        )

        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.json({
            message : "Success"
        })
        
    }catch(e){
        return res.status(500).json({
            message: "Failed"
        });

    }
})
mongoose.connect(process.env.MONGO_URI).then(()=>{console.log("Mongo Connected")}).catch(err=>console.log(err));

app.listen(4000,()=>console.log("Server Running "))