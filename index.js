const functions = require('./functions.js');
const path = require('path');
const fs = require('fs');
const colors = require("colors");

// Entrada para ingresar la ruta
const prompt = require('prompt-sync')();
let pathValue = prompt('Ingresa la ruta del archivo: '.magenta);
console.log(`Ruta ingresada: '${pathValue}'`.white);

let pathTransformed = functions.pathAbsoluteOrRelative(pathValue);
//console.log(`pathTransformed1 retorna: ${pathTransformed}`.white);

pathTransformed = functions.pathNormalize(pathTransformed);
//console.log(`pathTransformed2 retorna: ${pathTransformed}`);
functions.fileAccess(pathTransformed);

// // 1. Función que me retorne la ruta absoluta
// const pathAbsoluteOrRelative = (route) => {
//     // 1.1 Verficar si la ruta es absoluta o relativa
//     let questionIsAbsolute = path.isAbsolute(route);
//     //console.log(`Es o no absoluta: ${questionIsAbsolute}`.white);

//     // 1.2 Condicional si es que es absoluta la retorna tal cual, si es que es relativa la transforma
//     const absolutePath = () => {
//         if (questionIsAbsolute === false) {
//             let absolutePathValue = path.resolve(route);
//             //console.log('Conviertiendo ruta a absoluta'.magenta);
//             //console.log(`Ruta absoluta: '${absolutePathValue}'`.white);
//             return absolutePathValue;
//         } else {
//             return route;
//         }
//     }
//     return absolutePath();
// }

// let pathTransformed = pathAbsoluteOrRelative(pathValue);
// pathTransformed = path.normalize(pathTransformed); // Normaliza la ruta
// //console.log(`path normalize: '${pathTransformed}'`);
// const pathExists = (route) => fs.existsSync(route); // Función para corroborar si la ruta existe

// // Función para acceder al contenido del archivo
// const reading = () => {
//     //console.log(absolutePath);
//     const fileContent = fs.readFileSync(pathTransformed, 'utf-8', (error, data) => {
//         if (!error) {
//             return data;
//         } else {
//             return console.log(`Error: ${error}`);
//         }
//     })
//     return fileContent;
// }


// //función para leer documento  
// const readingFile = (file) => {
//     try {
//         const data = fs.readFileSync(file, "utf8");
//         getLinks(data, file)

//     } catch (e) {
//         console.log(`Error: ${e}`);
//     }
// };

// //Función para buscar y extraer los links del documento
// const getLinks = (file) => {
//     const lines = file.split("\n"); //separa en lineas el documento
//     let arrayLinks = [];
//     for (let i = 0; i < lines.length; i++) {
//         const line = lines[i];
//         const regularEx = /\[([^\]]+)]\((https?:\/\/[^\s)]+)\)/g;
//         const links = line.matchAll(regularEx);
//         const match = regularEx.test(line);
//         if (match) {
//             for (const link of links) {
//                 const data = {
//                     text: link[1],
//                     href: link[2],
//                     file: pathTransformed,
//                     line: i ++,
//                 };
//                 arrayLinks.push(data);
//             }
//             console.log(arrayLinks)
//             //console.log(arrayLinks.length);
//         }
//     }
//     return arrayLinks;
// };

// // Acceder al archivo SI su extensión es '.md' y 
// if ((path.extname(pathTransformed) === '.md') && (pathExists(pathTransformed) === true)) {
//     console.log('Leyendo archivo'.magenta);
//     //console.log(readingFile(pathTransformed));
// }

// else if ((path.extname(pathTransformed) !== '.md') && (pathExists(pathTransformed) === true)) {
//     return console.log('Su archivo no es de tipo Markdown'.red);
// }

// else if (pathExists(pathTransformed) === false) {
//     return console.log('La ruta no existe, verifique la ruta y vuelva a ingresar'.red)
// }
