function test (a){


if(a > 200){
    asd =  (a - 200).toFixed(2);
}else{
    asd = (200 - a).toFixed(2)
}

if(asd < 10){
    return `0${asd}`
}else
    return asd

}

module.exports = test


