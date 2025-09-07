const express = require('express')
const app = express()

const data = require('./data')

app.use(express.json())

app.get('/user',(req,res)=>{
    // res.send(data.user)
    res.json(
        {
            message : "data successful",
            data : data.user,
            time : new Date().toLocaleString()
        }
    )
})

app.post("/user" , (req,res)=>{
    const newData = req.body
    data.user.push(newData)
    res.json({
        message : "data successfull ok",
        data : data.user
    })
})

app.listen(6001,()=>{
    console.log("Server started");
    
})