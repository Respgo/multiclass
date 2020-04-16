//requires
const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'impriime en consola la tabla seleccionada', opts)
    .command('crear', 'crea un archivo de tabla de multiplicar con limites', opts)
    .help()
    .argv;
module.exports = {
    argv
}