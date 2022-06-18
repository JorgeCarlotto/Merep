module.exports ={

    obtener:function(conexion,funcion){
        conexion.query("SELECT * FROM stamperimg ",funcion)
    },

    insertar:function(conexion,datos,archivos,funcion){
        conexion.query("INSERT INTO stamperimg (nombreImg, imagen) VALUES(?,?)",[datos.nombreImg, archivos.filename],funcion)
    },


    


}