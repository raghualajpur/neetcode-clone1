const mongoose=require("mongoose");
const dotenv = require("dotenv");
const express=require("express");
const courseLib = require("./backend/lib/courseLib")
const app=express()
dotenv.config()
process.env


app.use(express.static("frontend"))
app.get("/",function(req,res){
    res.sendFile(__dirname+"/frontend/index.html")
})

mongoose.set("strictQuery", true)
mongoose.connect(process.env.MONGOOS,async function(err){
    if(err){
        console.error(err)
    }else{
        console.log("DB Connected Successfully")
        await courseLib.createFirstCourse()
        const courses=await courseLib.getAllCourses();
        console.log(courses)
        app.listen(3000,function(){
            console.log("Server at http://localhost:3000")
        
        })
    }
})


