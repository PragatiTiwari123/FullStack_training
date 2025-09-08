const express = require('express')

const app= express()

app.get('/greet',(req,res)=>{
    res.send("hello world")
})

app.listen(5002,()=>{
    console.log("Server started");
    
})