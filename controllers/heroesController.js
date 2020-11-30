const fs = require('fs');
//archivo parseado
const heroesParseado = JSON.parse(fs.readFileSync('./data/heroes.json','utf-8'));

module.exports = {
    leerHeroes : (req,res)=>{
    res.send(heroesParseado);
    },
    detalleEspecifico : (req,res)=>{
    let idParametizado = Number(req.params.id);
    //IMPORTANTE LO DE ABAJO ES UN ARRAY!!!!!!!!, SI QUIERES ACCEDER TIENEN QUE PONER EL INDICE AUNQUE SOLO HAYA UNO, VA IGUAL XQ SINO NO ACCEDEMOS A NADA Y ESTA INDEFINIDA!!!!!!!!!
    let idSeleccionado = heroesParseado.filter(cadaHeroe=>{
        return  idParametizado == cadaHeroe.id;
    });

        if(idSeleccionado[0]){
            res.send(`Hola mi nombre es ${idSeleccionado[0].nombre} y soy ${idSeleccionado[0].profesion} .` );
        
        }else{
            res.send('No se ha encontrado nada...');
        }

    },
    heroesBio : (req,res)=>{
        let okSelecc = req.params.ok;
        let idSelecc = heroesParseado.filter(cadaHeroe => {
            return cadaHeroe.id == req.params.id;
        });
        if(idSelecc[0] == undefined){
            res.send('No encontramos un héroe para mostrarte su biografía"');
        }else if( okSelecc == 'ok'){
            res.send('Nombre: '+idSelecc[0].nombre + '<br> Biografía: '+ idSelecc[0]. resenia)
        }else{
            res.send('Lamento que no desees saber más de mi :(');
        }
    },
    creditos : (req,res)=>{
        res.send('Hecho por Emilce molina... ||2020');
    }
}