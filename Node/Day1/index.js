// console.log("Hello world")

//******************************CORE MODULE**************************************** */

// var v = require("fs")
// v.writeFileSync("abc.txt","Your file is opened")
// var content = v.readFileSync("abc.txt","utf-8")
// console.log(content)

// const data = require("os")
// console.log(data.platform());

//******************************LOCAL MODULE**************************************** */

function sum(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
module.exports = {
    sum,sub
}

//******************************3rd MODULE**************************************** */

const data = require("chalk")
console.log(data.green("This is my program"));
console.log(data.blue("This is my program"));
console.log(data.yellow("This is my program"));
console.log(data.grey("This is my program"));
