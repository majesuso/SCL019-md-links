const path = require('path');
const fs = require('fs');
const colors = require("colors");

// Entrada para ingresar la ruta
const prompt = require('prompt-sync')();
let pathValue = prompt('Ingresa la ruta del archivo: '.magenta);
console.log(`Ruta ingresada: '${pathValue}'`.white);

// 1. Función que me retorne la ruta absoluta
const pathAbsoluteOrRelative = (route) => {
    // 1.1 Verficar si la ruta es absoluta o relativa
    let questionIsAbsolute = path.isAbsolute(route);
    //console.log(`Es o no absoluta: ${questionIsAbsolute}`.white);

    // 1.2 Condicional si es que es absoluta la retorna tal cual, si es que es relativa la transforma
    const absolutePath = () => {
        if (questionIsAbsolute === false) {
            let absolutePathValue = path.resolve(route);
            //console.log('Conviertiendo ruta a absoluta'.magenta);
            //console.log(`Ruta absoluta: ${absolutePathValue}`.white);
            return absolutePathValue;
        } else {
            return route;
        }
    }
    return absolutePath();
}

let pathTransformed = pathAbsoluteOrRelative(pathValue);
pathTransformed = path.normalize(pathTransformed); // Normaliza la ruta
const pathExists = (route) => fs.existsSync(route); // Función para corroborar si la ruta existe

// Función para acceder al contenido del archivo
const reading = () => {
    //console.log(absolutePath);
    const fileContent = fs.readFileSync(pathTransformed, 'utf-8', (error, data) => {
        if (!error) {
            return data;
        } else {
            return console.log(`Error: ${error}`);
        }
    })
    return fileContent;
}

// Acceder al archivo SI su extensión es '.md' y 
if ((path.extname(pathTransformed) === '.md') && (pathExists(pathTransformed) === true)) {
    console.log('Leyendo archivo'.magenta);
    //console.log(reading());
}

else if ((path.extname(pathTransformed) !== '.md') && (pathExists(pathTransformed) === true)) {
    return console.log('Su archivo no es de tipo Markdown'.red);
}

else if (pathExists(pathTransformed) === false) {
    return console.log('La ruta no existe, verifique la ruta y vuelva a ingresar'.red)
}
