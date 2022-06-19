const EXIF = require("exif-js")




function asd(photo){

let zxc = "/img/"+photo


    EXIF.getData(zxc, function() {

        myData = zxc;

        console.log(myData.exifdata);
})
}


module.exports = asd