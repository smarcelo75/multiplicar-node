// // recibir argumentos desde la linea de comandos

// // process es un modulo: console.log(process);

// // Obtenemos los argumentos del proceso
// let argv = process.argv;
// // Obtengo el tercer parametro
// let parametro = argv[2];
// // como el tercer parametro es --base=5, 
// // utilizo split para armar un vector de dos elementos separados por =.
// // luego accedo a la segunda posicion para obtener el valor [1]
// let base = parametro.split('=')[1];

// // Accedemos al modulo multiplicar.js
// // a traves de la desestructuracion {} accedemos a la funcion crearArchivo
// const { crearArchivo } = require('./multiplicar/multiplicar');

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado ${archivo}`))
//     .catch(err => console.log(err));



const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

let argv2 = process.argv;
console.log(argv);
console.log('base =', argv.base);
console.log('b =', argv.b);
console.log('limite =', argv.limite);
console.log('l =', argv.l);