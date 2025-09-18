const mongoose = require("mongoose")

async function connectDB(){
    try {
        await mongoose.connect(`mongodb+srv://pragatip963_db_user:PAGAL098a@cluster0.cwvzrrz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        console.log("DB Connect");
        
    } catch (error) {
        console.log(error);
        
    }
}
module.exports = {connectDB};
// console.log("Hello");
