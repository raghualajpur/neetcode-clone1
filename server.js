const express=require("express")
const app=express()

app.get("/",function(req,res){
    res.send("Hello World")
})
app.get("/myName",function(req,res){
    res.send("Alajpur Raghu")
})
app.listen(3000,function(){
    console.log("Server at http://localhost:3000")
    
})

