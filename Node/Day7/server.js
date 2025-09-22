const express = require("express")

const {connectDB} = require('./db.js')
const {User} = require('./model.js')

const app = express()

app.use(express.json())

connectDB();

app.post("/users",async (req,res)=>{
    try{
        const user=new User(req.body)
        await user.save()
        res.json({
            message:"successful loaded",
            data:user
        })
    }
    catch(err){
        res.json({
            message:"not successful"
        })
    }
})

PORT = `${process.env.PORT}` || 3000

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
    
})