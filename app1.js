const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar');
const color = require('colors');
const argv = require('./config/yargs').argv;

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('==================='.blue);
        console.log(`TABLA DEL ${argv.base}`.bgBlue.cyan.bold);
        console.log('==================='.blue);
        listarArchivo(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Se creo el archivo ${ archivo }`))
            .catch(err => console.log(`Se genero el error ${err}`));
        break;

    default:
        console.log('Comando no reconocido');
}