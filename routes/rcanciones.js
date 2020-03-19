module.exports = function (app, swig) {

    app.get("/canciones", function (req, res) {
        let canciones = [{
            "nombre": "blank space",
            "precio": "1.2"
        }, {
            "nombre": "see you again",
            "precio": "1.3"
        }, {
            "nombre": "uptown funk",
            "precio": "1.1"
        }];

        let respuesta = swig.renderFile("views/btienda.html", {
            vendedor: "tienda de canciones",
            canciones: canciones
        });

        res.send(respuesta);
    });

    app.get('/canciones/agregar', function (req, res) {
        let respuesta = swig.renderFile('views/bagregar.html', {

        });
        res.send(respuesta);
    })


    app.get("/suma", function (req, res) {
        let respuesta = parseInt(req.query.num1) + parseInt(req.query.num2);
        res.send(String(respuesta));
    });

    app.get('/canciones/:id', function (req, res) {
        let respuesta = 'id: ' + req.params.id;
        res.send(respuesta);
    });
    app.get('/canciones/:genero/:id', function (req, res) {
        let respuesta = 'id: ' + req.params.id + '<br>' + 'Género: ' + req.params.genero;
        res.send(respuesta);
    });

    app.post("/cancion", function (req, res) {
        res.send("Cancion agregada:" + req.body.nombre + "<br>"
            + " genero: " + req.body.genero + "<br>"
            + " precio: " + req.body.precio);
    });
};