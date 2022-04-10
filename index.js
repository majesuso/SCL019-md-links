const path = require('path');
const fs = require('fs/promises');
const colors = require("colors");

// Ingresar ruta
const prompt = require ( 'prompt-sync' ) ( ) ; 
let promptValue = prompt('Ingresa la ruta del archivo: '.magenta);
console.log(`Ruta ingresada: ${promptValue}`.white);

// Verficar si la ruta es absoluta o relativa
console.log(`Es o no absoluta: ${path.isAbsolute(promptValue)}`.white);
console.log(`Ruta absoluta: ${path.resolve(promptValue)}`.white);
console.log(`Extension: ${path.extname(promptValue)}`.white);