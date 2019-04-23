module.exports = function(app, swig) {
    app.get("/oferta", function(req, res) {
        var respuesta = swig.renderFile('views/agregar.html', {});
        res.send(respuesta);
    });

    app.post("/oferta", function(req, res) {
        res.send("Canción agregada:"+req.body.titulo +"<br>"
            +" genero :" +req.body.descripcion +"<br>"
            +" precio: "+req.body.precio);
    });

};