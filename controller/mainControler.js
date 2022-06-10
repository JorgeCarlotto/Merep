const con = require('../config/conexion')
const barco = require('../model/barco')


let mainController ={

    index: function(req,res){

        barco.obtener(con,function(err,datos){
            console.log(datos)
            res.render('main',{barcos:datos})
        })
        
}
}

module.exports = mainController;