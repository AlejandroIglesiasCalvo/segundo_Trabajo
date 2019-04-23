module.exports = function(app) {
    app.get("/oferta", function(req, res) {
        var respuesta = swig.renderFile('views/agregar.html', {});
        res.send(respuesta);
    });

    app.post("/oferta", function(req, res) {
        res.send("Canción agregada:"+req.body.nombre +"<br>"
            +" genero :" +req.body.genero +"<br>"
            +" precio: "+req.body.precio);
    });
};