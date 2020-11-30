const express = require('express');
const router = express.Router();

//controlladores = logica y contenido de acciones
const mainControlador = require('../controllers/mainController');

//enrutadores
router.get('/',mainControlador.home);


//exportas el modulo
module.exports = router;