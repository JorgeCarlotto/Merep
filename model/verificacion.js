module.exports ={

    obtener:function(conexion,funcion){
        conexion.query("SELECT * FROM verificacionbarcos",funcion)
    },
    
    insertar:function(conexion,datos,funcion){
        conexion.query("INSERT INTO verificacionbarcos (latgrados,latminutos,latsegundos,longgrados,longminutos,longsegundos) VALUES(?,?,?,?,?,?)",
    [ 
    datos.latGrados,
    datos.latMinutos,
    datos.latSegundos,
    datos.longGrados,
    datos.longMinutos,
    datos.longSegundos,
    
    ],funcion)

    },

    retornarDatosID:function(conexion,id,funcion) {
        conexion.query("SELECT * FROM verificacionbarcos WHERE id=?",[id],funcion)        
    },

    borrar:function(conexion,id,funcion) {
        conexion.query("DELETE FROM verificacionbarcos WHERE id=?",[id],funcion)        

    }


    


}