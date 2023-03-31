console.log("Hola1");


const hhtp = require("http");

hhtp.createServer((req,res) =>{

    res.write("Hola Mundo2");
    res.end();

})
.listen(8080);
