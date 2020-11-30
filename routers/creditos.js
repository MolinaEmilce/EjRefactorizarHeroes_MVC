const express = require('express');
const router = express.Router();

const creditosControlador = require('../controllers/creditosController');

router.get('/',creditosControlador.creditoFinal);

module.exports = router;