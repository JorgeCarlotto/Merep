const con = require("../config/conexion");
const barco = require("../model/barco");
const dist = require("./distanciaEntrePuntos")


let mainController = {
  index: function (req, res) {


    barco.obtener(con, function (err, datos) {
      //  console.log(datos);
      res.render("main", { barcos: datos ,zee:dist });
    });
  },
  cargar: function (req, res) {
    res.render("cargar");
  },
  cargarBarco: function (req, res) {
   barco.insertar(con,req.body,function (err) {
     res.redirect('/')
     console.log(err);
   })
  }
};

module.exports = mainController;
