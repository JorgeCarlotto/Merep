const express = require('express');
const router = express.Router();

const mainController = require('../controller/mainController');

const multer = require('multer');
let fecha =  Date.now();

let rutaAlmacen = multer.diskStorage(
    {
        destination:function(request,file,callback) {
            callback(null,'./public/img/');
        },
        filename:function(request,file,callback) {
            console.log(file)
            callback(null,fecha+"_"+file.originalname);
        }
}
);

let cargar = multer({ storage:rutaAlmacen })

router.get('/',mainController.index);
router.get('/cargar',mainController.cargar);
router.post('/',mainController.cargarBarco);
router.get('/ozy',mainController.ozy);
router.get('/verificacion',mainController.verificacion);
router.post('/verificacion',mainController.cargarVerificar);
router.post('/verificacion/eliminar/:id',mainController.eliminarVerificar);
router.post('/eliminar/:id',mainController.eliminar)
router.get('/editar/:id',mainController.editar)
router.post('/actualizar',mainController.actualizar);
router.get('/toExel',mainController.toExel);
router.get('/teststamper',mainController.teststamper);
router.get('/stamper',mainController.stamper);

router.post("/stamper",cargar.single("imagenes"),mainController.stamperGuardar);

module.exports = router;

