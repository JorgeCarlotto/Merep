const con = require("../config/conexion");
const barco = require("../model/barco");
const dist = require("./distanciaEntrePuntos")
const decimal =require("./pasoAdecimales")
const fecha = require("./fecha")
const test = require("./test")


let mainController = {
  index: function (req, res) {
    barco.obtener(con, function (err, datos) {
      //  console.log(datos);
      res.render("main", { barcos: datos ,zee:dist,decimal:decimal,fecha:fecha,test:test });
      
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
  },

  ozy: function (req, res) {
    barco.obtener(con, function (err, datos) {
      //  console.log(datos);
      res.render("ozy", {barcos: datos ,zee:dist,decimal:decimal,fecha:fecha,test:test});
      
    });
  },

  verificacion: function (req, res) {
   
    let datosForm = req.body;
    console.log(datosForm);
    res.render("verificacion",{datosForm:datosForm,zee:dist,decimal:decimal});
  },

  eliminar: function(req,res){
    console.log("Recepción de datos")
    console.log(req.params.id)

    barco.borrar(con,req.params.id,function(err) {
      res.redirect('/')
    })
  }

  
};

module.exports = mainController;
