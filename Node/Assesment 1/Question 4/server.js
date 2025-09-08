const express = require('express')


const app = express()

const data = require('./data.js')

app.use(express.json())

app.get('/add-user',(req,res)=>{
    res.json(data.user)
})

app.post('/add-user',(req,res)=>{
    const newdata = req.body
    data.user.push(newdata)
    res.json = ({
        "userDetail" : data.user,
        "messdage" : "sfsffsf"
    })
})

app.listen(4002,()=>{
    console.log("Server started");
    
})