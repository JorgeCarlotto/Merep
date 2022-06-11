function decimal(grados, minutos, segundos, direccion)
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


module.exports = decimal