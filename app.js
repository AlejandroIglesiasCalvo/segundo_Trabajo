var express = require('express');
var app = express();

// Variables
app.set('port', 8081);





//Rutas/controladores por lógica
require("./routes/rusuarios.js")(app);
require("./routes/rcanciones.js")(app);


// lanzar el servidor
app.listen(app.get('port'), function() {
    console.log("Servidor activo");
})
