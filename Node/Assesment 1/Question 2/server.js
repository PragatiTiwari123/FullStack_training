const server = require('http')
server.createServer((req,res)=>{
    res.write("Welcome to NodeJS")
    res.end('')
}).listen(3000,()=>{
    console.log("Serer started");
    
})