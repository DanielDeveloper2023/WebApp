const express = require('express');
require("dotenv").config();
const hbs = require("hbs");
const app = express();


const port = process.env.port;
//handlerbars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials',function (error) {});



app.use(express.static("public"));


//Servir contenido esdtatico

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('home',{
        title: 'Tcell CR'
    });
});

app.get('/logueo', function (req, res) {
    res.render('logueo');
});

app.get('/factura', function (req, res) {

    const date = new Date();
    const fullYear =  date.toLocaleDateString('es-cr');
    res.render('factura',{
        date: fullYear
    });
});

app.get('/articles', function (req, res) {
    res.render('articles');
})



app.listen(port,()=>{
    console.log(`Click para ejecutar la App http://localhost:${port}`);
});