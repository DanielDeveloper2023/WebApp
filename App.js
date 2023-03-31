const express = require('express');
const hbs = require("hbs");
require("dotenv").config();
const app = express();

const port = process.env.port;
//handlerbars
app.set('view engine','hbs');
hbs.registerPartials(__dirname + "/views/partials");

//Servir contenido esdtatico

app.use(express.static('public'));



app.get('/', function (req, res) {
    res.render('home',{
        nombre: "Daniel Rodriguez",
        titulo: "Tcell CR"
    });
});

app.get('/logueo', function (req, res) {
    res.sendFile(__dirname + '/public/logueo.html')
});
app.get('*', function (req, res) {
    res.send('404 Pague not found')
})



app.listen(port,()=>{
    console.log(`Click para ejecutar la App http://localhost:${port}`);
});