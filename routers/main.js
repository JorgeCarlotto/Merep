const express = require('express');
const router = express.Router();

const mainController = require('../controller/mainControler');

router.get('/',mainController.index);
router.get('/cargar',mainController.cargar);
router.post('/',mainController.cargarBarco);
router.get('/ozy',mainController.ozy);
router.get('/verificacion',mainController.verificacion);
router.post('/verificacion',mainController.verificacion);


module.exports = router;