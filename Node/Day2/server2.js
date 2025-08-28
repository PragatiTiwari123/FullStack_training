const server = require("http")
server.createServer((req,res)=>{
    if(req.url=="/"){
        res.write("Home page")
    }
    else if (req.url == "/about"){
        res.write("About page")
    }
    else{
        res.write("404 page not found")
    }
    res.end("")
}).listen(5002,()=>{
    console.log("Server started");
    
})