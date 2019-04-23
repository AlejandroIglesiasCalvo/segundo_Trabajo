module.exports = function(app) {
    app.get("/ofertas", function(req, res) {
        res.send("ofertas");
    });
};