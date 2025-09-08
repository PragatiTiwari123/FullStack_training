const express = require("express")
const app = express()

app.get('/square/:number',(req,res)=>{
    const num = req.params.number
    res.send(`${num*num}`)
})

app.listen(4000,()=>{
    console.log("Server started");
})