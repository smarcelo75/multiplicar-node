// Requireds
const fs = require('fs');
const color = require('colors');

let listarArchivo = (base, limite) => {
    // return new Promise((resolve, reject) => {

    //     if (!Number(base)) {
    //         reject('La base no es numerica!');
    //         return;
    //     }

    //     if (!Number(limite)) {
    //         reject('El limite no es numerico!');
    //         return;
    //     }

    //     let datos = '';
    //     for (let i = 1; i <= limite; i++) {
    //         datos += `${base} * ${i} = ${base * i}\n`;
    //     }

    //     resolve(datos);
    // });

    let datos = '';
    for (let i = 1; i <= limite; i++) {
        datos += `${base} * ${i} = ${base * i}\n`;
    }
    console.log(datos);
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('base no es un numero!!');
            return;
        }

        let datos = '';
        let nombreArchivo = `tabla-${ base }-al-${ limite }.txt`.red;

        for (let i = 1; i <= limite; i++) {
            // console.log(`${ base } * ${ i } =`, base * i);
            datos += `${ base } * ${ i } = ${ base * i }\n`;
        };

        const data = new Uint8Array(Buffer.from(datos));
        fs.writeFile(`tablas/${ nombreArchivo }`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(nombreArchivo)
        });
    });
};

module.exports = {
    crearArchivo,
    listarArchivo
};