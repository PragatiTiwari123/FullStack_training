require('dotenv').config()
const mongoose = require("mongoose")

async function connectDB(){
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log("DB Connect");
        
    } catch (error) {
        console.log(error);
        
    }
}
module.exports = {connectDB};
// console.log("Hello");
