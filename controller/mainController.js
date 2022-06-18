const con = require("../config/conexion");
const barco = require("../model/barco");
const dist = require("./distanciaEntrePuntos");
const decimal = require("./pasoAdecimales");
const fecha = require("./fecha");
const test = require("./test");
const verificacion = require("../model/verificacion");
const EXIF = require("exif-js");

let mainController = {
  index: function (req, res) {
    barco.obtener(con, function (err, datos) {
      //  console.log(datos);
      res.render("main", {
        barcos: datos,
        zee: dist,
        decimal: decimal,
        fecha: fecha,
        test: test,
      });
    });
  },

  cargar: function (req, res) {
    res.render("cargar");
  },

  cargarBarco: function (req, res) {
    barco.insertar(con, req.body, function (err) {
      res.redirect("/");
      console.log(err);
    });
  },

  ozy: function (req, res) {
    barco.obtener(con, function (err, datos) {
      //  console.log(datos);
      res.render("ozy", {
        barcos: datos,
        zee: dist,
        decimal: decimal,
        fecha: fecha,
        test: test,
      });
    });
  },

  verificacion: function (req, res) {
    verificacion.obtener(con, function (err, datos) {
      res.render("verificacion", {
        verificacion: datos,
        zee: dist,
        decimal: decimal,
      });
    });
  },

  cargarVerificar: function (req, res) {
    verificacion.insertar(con, req.body, function (err) {
      res.redirect("/verificacion");
      console.log(err);
    });
  },

  eliminarVerificar: function (req, res) {
    verificacion.borrar(con, req.params.id, function (err) {
      res.redirect("/verificacion");
    });
  },

  eliminar: function (req, res) {
    console.log("Recepción de datos");
    console.log(req.params.id);

    barco.borrar(con, req.params.id, function (err) {
      res.redirect("/");
    });
  },

  editar: function (req, res) {
    barco.retornarDatosID(con, req.params.id, function (err, registros) {
      res.render("editar", { barco: registros[0] });
      
    });
  },

  actualizar: function (req, res) {
    // console.log(req.body);
    barco.actualizar(con,req.body,function(err){
      // console.log(err)
      res.redirect("/");
    })
  },

  toExel: function (req, res) {
    barco.obtener(con, function (err, datos) {
      res.render("toExel", {
        barcos: datos,
        zee: dist,
        decimal: decimal,
        fecha: fecha,
        test: test,
      });
    });
  },

  teststamper: function (req, res) {
    res.render("testStamper");
  },
};

module.exports = mainController;
