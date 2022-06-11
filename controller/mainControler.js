const con = require("../config/conexion");
const barco = require("../model/barco");
const dist = require("./distanciaEntrePuntos")
const decimal =require("./pasoAdecimales")
const fecha = require("./fecha")


let mainController = {
  index: function (req, res) {


    barco.obtener(con, function (err, datos) {
      //  console.log(datos);
      res.render("main", { barcos: datos ,zee:dist,decimal:decimal,fecha:fecha });
      
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
