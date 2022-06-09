const con = require('../config/conexion')


let mainController ={

    index: function(req,res){

        con.query("SELECT * FROM barcos",function(err,datos){
            console.log(datos)
        })

        res.render('main')
    },
}

module.exports = mainController;