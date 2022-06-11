function longitud(grados, minutos, segundos, direccion)
{
if(direccion){
signo     = (direccion.toLowerCase() == 'w' ||
    direccion.toLowerCase() == 's') ?
    -1 : 1;
    direccion = (direccion.toLowerCase() == 'w' ||
        direccion.toLowerCase() == 's' ||
        direccion.toLowerCase() == 'n' ||
        direccion.toLowerCase() == 'e') ?
        direccion.toLowerCase() : '';
    }
    else{
    signo     = (grados < 0) ? -1 : 1;
    direccion = '';
    }
    dec = Math.round((Math.abs(grados) + ((minutos * 60) + segundos) / 3600) * 1000000) / 1000000;
    if(isNaN(direccion) || direccion == '')
        dec = dec * signo;

    return dec   
}

function latitud(grados, minutos, segundos, direccion)
{
if(direccion){
signo     = (direccion.toLowerCase() == 'w' ||
    direccion.toLowerCase() == 's') ?
    -1 : 1;
    direccion = (direccion.toLowerCase() == 'w' ||
        direccion.toLowerCase() == 's' ||
        direccion.toLowerCase() == 'n' ||
        direccion.toLowerCase() == 'e') ?
        direccion.toLowerCase() : '';
    }
    else{
    signo     = (grados < 0) ? -1 : 1;
    direccion = '';
    }
    dec = Math.round((Math.abs(grados) + ((minutos * 60) + segundos) / 3600) * 1000000) / 1000000;
    if(isNaN(direccion) || direccion == '')
        dec = dec * signo;

    return dec   
}


function Dist(lat1, lon1, lat2, lon2) {
    rad = function (x) {
        return x * Math.PI / 180;
    }

    var R = 6380.137;//Radio de la tierra en km
    var dLat = rad(lat2 - lat1);
    var dLong = rad(lon2 - lon1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d.toFixed(3);//Retorna tres decimales
}



let lat1 = -40.875000; //PD06
let lon1 = -62.305000; //PD06
 let lat2 = (longitud(42,00,00))*-1;
 let lon2 = (latitud(58,00,00))*-1;
// let lat2= -42.155446;
// let lon2= -58.219406;

console.log(((Dist(lat1, lon1, lat2, lon2))/1.852).toFixed(1))