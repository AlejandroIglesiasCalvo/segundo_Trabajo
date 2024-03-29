//Modulos
var express = require('express');
var app = express();


var mongo = require('mongodb');
var swig = require('swig');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

// Variables
app.set('port', 8081);
app.set('db','mongodb://admin:ornitorrinco@tiendamusica-shard-00-00-en3ox.mongodb.net:27017,' +
    'tiendamusica-shard-00-01-en3ox.mongodb.net:27017,' +
    'tiendamusica-shard-00-02-en3ox.mongodb.net:27017/test?ssl=true&replicaSet=tiendamusica-shard-0&authSource=admin&retryWrites=true');





//Rutas/controladores por lógica
require("./routes/rOfertas.js")(app,swig, mongo);
require("./routes/rUsuarios.js")(app,swig, mongo);


// lanzar el servidor
app.listen(app.get('port'), function() {
    console.log("Servidor activo");
})
