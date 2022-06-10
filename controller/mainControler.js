const con = require("../config/conexion");
const barco = require("../model/barco");

let mainController = {
  index: function (req, res) {
    barco.obtener(con, function (err, datos) {
    //   console.log(datos);
      res.render("main", { barcos: datos });
    });
  },
  cargar: function (req, res) {
    res.render("cargar");
  },
  cargarBarco: function (req, res) {
     res.send(req.body)
     console.log(req.body);
  }
};

module.exports = mainController;
