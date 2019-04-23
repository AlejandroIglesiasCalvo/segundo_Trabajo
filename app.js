//Modulos
var express = require('express');
var app = express();

var swig = require('swig');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

// Variables
app.set('port', 8081);





//Rutas/controladores por lógica
require("./routes/rOfertas.js")(app,swig);
require("./routes/rUsuarios.js")(app,swig);


// lanzar el servidor
app.listen(app.get('port'), function() {
    console.log("Servidor activo");
})
