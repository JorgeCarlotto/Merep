const express = require('express');
const router = express.Router();

const mainController = require('../controller/mainController');

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
module.exports = router;

