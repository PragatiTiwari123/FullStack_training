const abc = require('./data')
const express = require ('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("this is my get method")
})
app.get("/about",(req,res)=>{
    res.send(JSON.stringify(user))
})
app.post("/about",(req,res)=>{
    // res.send(JSON.stringify(user));
    // res.send(abc)
    res.send(abc.user1)
})

app.post('/',(req,res)=>{
    res.send("this is my post method")
})

app.listen(5002,()=>{
    console.log("server is started");
    
})