const server = require("http")
let user = [
    {"id":1,"name":"Pragati"},
    {"id":2,"name":"Nishtha"},
    {"id":3,"name":"Pooja"}
]
server.createServer((req,res)=>{
    if(req.url=="/"){
        res.write("<h1>Home page</h1>")
    }
    else if(req.url=="/user"){
        res.write(JSON.stringify(user))
    }
    res.end("")
}).listen(5002,()=>{
    console.log("server started");
    
})