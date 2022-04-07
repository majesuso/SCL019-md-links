// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question('Ingrese la ruta del archivo: ', (path) => {
//   console.log(`ruta: ${path}`);
//   readline.close();
// });

const prompt = require ( 'prompt-sync' ) ( ) ; 
let promptValue = prompt('Ingresa la ruta del archivo: ');
console.log(`ruta: ${promptValue}`);