const f = require("fs")
f.writeFileSync("hello.txt","Hello Node JS")
console.log(f.readFileSync("hello.txt","utf-8"));
f.appendFileSync("hello.txt"," , Practice make perfect")
console.log(f.readFileSync("hello.txt","utf-8"));

