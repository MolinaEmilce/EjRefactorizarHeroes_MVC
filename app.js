const express = require('express');
const app = express();

app.listen(3030, ()=>console.log('Puerto corriendo en 3030...'));

//requerimos las rutas par acuando el entrypoint tenga peticion de ellas
const rutaMain = require('./routers/main');
const rutaHeroes = require('./routers/heroes');
const rutaCreditos = require('./routers/creditos')
//las ejecutamos
app.use('/',rutaMain);
app.use('/heroes',rutaHeroes);
app.use('/creditos', rutaCreditos);
