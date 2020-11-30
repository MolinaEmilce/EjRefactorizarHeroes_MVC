const express = require('express');
const router = express.Router();

//requerimos traemos los controladores/acciones para usar su logica/acciones, sus propiedades o metodos
const heroesControlador = require('../controllers/heroesController');

router.get('/',heroesControlador.leerHeroes);
router.get('/detalle/:id',heroesControlador.detalleEspecifico);
router.get('/bio/:id/:ok?',heroesControlador.heroesBio);



module.exports = router;