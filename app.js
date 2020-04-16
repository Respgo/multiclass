//const fs = require('fs');
//const fs = require('express');
//const fs = require('./fs');
const colors = require('colors');
const argv = require('./config/yargs').argv;
const { crearArchivo, ListarTabla } = require('./multiplicar/multiplicar');

//let base = 3;

//let argv2 = process.argv;
//let parametro = argv[2];
// let base = parametro.split('=')[1]
let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        ListarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}
//console.log(argv);

//console.log(process); recupera informacion
//console.log(process.argv);

/**/