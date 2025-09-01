const user =  require('./data')
const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    res.send('HOME PAGE')
})
app.get("/sectionA",(req,res)=>{
    res.send(user.secA_data)
})
app.get("/sectionB",(req,res)=>{
    res.send(user.secB_data)
})
app.get("/sectionC",(req,res)=>{
    res.send(user.secC_data)
})

app.listen(6001,()=>{
    console.log("SERVER STARTED");
    
})