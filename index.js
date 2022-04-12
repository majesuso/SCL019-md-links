const path = require('path');
const fs = require('fs');
const colors = require("colors");

// Ingresar ruta
const prompt = require('prompt-sync')();
let promptValue = prompt('Ingresa la ruta del archivo: '.magenta);
console.log(`Ruta ingresada: ${promptValue}`.white);

// Verficar si la ruta es absoluta o relativa
console.log(`Es o no absoluta: ${path.isAbsolute(promptValue)}`.white);

//Si la ruta es relativa
let absolutePath = path.resolve(promptValue);

if (path.isAbsolute(promptValue) === false) {
    console.log('Conviertiendo ruta a absoluta'.magenta)
    console.log(`Ruta absoluta: ${absolutePath}`.white);
}

const reading = () => {
    //console.log(absolutePath);
    const fileContent = fs.readFileSync(absolutePath, 'utf-8', (error, data) => {
        if (!error) {
            return data;
        } else {
            return console.log(`Error: ${error}`);
        }
    })
    return fileContent;
}

if (path.extname(promptValue) === '.md') {
    console.log('Leyendo archivo'.magenta);
    console.log(reading());
} else {
    console.log('Su archivo no es de tipo Markdown'.red);
}
