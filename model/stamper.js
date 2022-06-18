module.exports ={

    obtener:function(conexion,funcion){
        conexion.query("SELECT * FROM stamperimg ",funcion)
    },

    insertar:function(conexion,datos,archivos,funcion){
        conexion.query("INSERT INTO stamperimg (nombreImg, imagen) VALUES(?,?)",[datos.nombreImg, archivos.filename],funcion)
    },

    retornarDatosID:function(conexion,id,funcion) {
        conexion.query("SELECT * FROM stamperimg WHERE id=?",[id],funcion)        
    },

    borrar:function(conexion,id,funcion) {
        conexion.query("DELETE FROM stamperimg WHERE id=?",[id],funcion)        

    }

    


}