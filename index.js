const functions = require('./functions.js');
const colors = require('colors');

// Entrada para ingresar la ruta
const prompt = require('prompt-sync')();
let pathValue = prompt('Ingresa la ruta del archivo: '.magenta);
console.log(`Ruta ingresada: '${pathValue}'`.white);

let pathTransformed = functions.pathAbsoluteOrRelative(pathValue);

pathTransformed = functions.pathNormalize(pathTransformed);
functions.fileExists(pathTransformed);
functions.pathExtName(pathTransformed);
functions.fileAccess(pathTransformed);



