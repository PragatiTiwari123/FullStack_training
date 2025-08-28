// ********************************** SERVER CREATION ***********************************************

const variable = require("http")
variable.createServer((req,res)=>{
    res.write("<h1>message from server</h1>")
    res.end("")
}).listen(5002,()=>{
    console.log("server started");
})
