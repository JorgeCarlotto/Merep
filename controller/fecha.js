let fecha = new Date();


if (fecha.getDate()<10){
    diaNuevo = `0${fecha.getDate()}`
}else
    diaNuevo = `${fecha.getDate()}`


let diaCompleto = diaNuevo+"/"+[fecha.getMonth()+1]+"/"+fecha.getFullYear()

module.exports = diaCompleto;