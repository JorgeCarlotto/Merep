module.exports ={

    obtener:function(conexion,funcion){
        conexion.query("SELECT * FROM barcos",funcion)
    },
    
    insertar:function(conexion,datos,funcion){
        conexion.query("INSERT INTO barcos (hora,nombre,bandera,senaldistintiva,latgrados,latminutos,latsegundos,longgrados,longminutos,longsegundos,tipoDeBuque,estado,avistadoPorSistema) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)",
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

}