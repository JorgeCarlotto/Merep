const express = require('express');
const router = express.Router();

const mainController = require('../controller/mainControler');

router.get('/',mainController.index);
router.get('/cargar',mainController.cargar);
router.post('/',mainController.cargarBarco);


module.exports = router;