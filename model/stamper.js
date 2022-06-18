module.exports ={

    obtener:function(conexion,funcion){
        conexion.query("SELECT * FROM stamper",funcion)
    },
    
    insertar:function(conexion,datos,funcion){
        conexion.query("INSERT INTO stamper (hora,nombre,bandera,senaldistintiva,latgrados,latminutos,latsegundos,longgrados,longminutos,longsegundos,tipoDeBuque,estado,avistadoPorSistema) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [datos.hora, 
    datos.nombreBarco,
    datos.bandera,
    datos.senalDistintiva,
    datos.latGrados,
    datos.latMinutos,
    datos.latSegundos,
    datos.longGrados,
    datos.longMinutos,
    datos.longSegundos,
    datos.tipoDeBuque,
    datos.actividad,
    datos.detectado


    ],funcion)

    },

    retornarDatosID:function(conexion,id,funcion) {
        conexion.query("SELECT * FROM stamper WHERE id=?",[id],funcion)        
    },

    borrar:function(conexion,id,funcion) {
        conexion.query("DELETE FROM stamper WHERE id=?",[id],funcion)        

    },

    actualizar:function(conexion,datos,funcion){
        conexion.query( "UPDATE stamper SET hora=?,nombre=?,bandera=?,senaldistintiva=?,latgrados=?,latminutos=?,latsegundos=?,longgrados=?,longminutos=?,longsegundos=?,tipoDeBuque=?,estado=?,avistadoPorSistema=? WHERE id=?",
        [datos.hora, 
            datos.nombreBarco,
            datos.bandera,
            datos.senalDistintiva,
            datos.latGrados,
            datos.latMinutos,
            datos.latSegundos,
            datos.longGrados,
            datos.longMinutos,
            datos.longSegundos,
            datos.tipoDeBuque,
            datos.actividad,
            datos.detectado,
            datos.id
        
            ],funcion
        )
    },
    


}