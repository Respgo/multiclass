//requires
const fs = require('fs');
const colors = require('colors/safe');

ListarTabla = (base, limite) => {
    console.log('============='.green);
    console.log(`===== Tabla de ${base} ====`.red);
    console.log('============='.green);
    for (i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} con tope ${limite} = ${base*i}`);
    }
}

crearArchivo = (base, limite) => {
        return new Promise((resolve, reject) => {
            if (!Number(base)) {
                reject(`Por favor ingresar un Numero el ${ base }`);
                return;
            }
            let data = '';

            for (i = 1; i <= limite; i++) {
                data += `${base} * ${i}=${base*i}\n`;
            }


            fs.writeFile(`tablas/tabla-${base}-limite-${limite}.txt`, data, (err) => {
                if (err) reject(err);
                else
                    resolve(`tabla-${base}-limite-${limite}.txt`.green)
                console.log('el archivo ha sido creado!');
            });
        });
    }
    //se agregan todas las funciones a exportar
module.exports = {
    crearArchivo,
    ListarTabla
}