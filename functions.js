const path = require('path');
const fs = require('fs');
const colors = require("colors");

const questionIsAbsolute = (route) => path.isAbsolute(route); // Verficar si la ruta es absoluta o relativa
const pathConvertedToAbsolute = (route) => path.resolve(route); // Convertir ruta relativa a absoluta

// Función que retorne la ruta absoluta según su caso, si es que es absoluta la retorna tal cual, si es que es relativa la transforma
const pathAbsoluteOrRelative = (route) => {
    return questionIsAbsolute(route) ? (route) : pathConvertedToAbsolute(route)
}

//let pathTransformed = pathAbsoluteOrRelative();
const pathNormalize = (route) => path.normalize(route); // Normaliza la ruta
//console.log(`path normalize: '${pathTransformed}'`);

const fileExists = (route) => fs.existsSync(route); // Función para corroborar si el archivo existe

const pathExtName = (route) => path.extname(route);

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


const fileAccess = (route) => {
    // Acceder al archivo SI su extensión es '.md' y SI el archivo existe
    if ((pathExtName(route) === '.md') && (fileExists(route) === true)) {
        console.log('Leyendo archivo\n'.magenta + `
        ∧＿_∧
       (｡･ω･｡)つ━☆・*。 ¡WOOSH!
       ⊂　　/　　 ・゜+. Aquí están tus resultados
       しーＪ　　　°。+
       `.white);
       return true
    }

    // Case: Existe pero no es un archivo md
    else if ((pathExtName(route) !== '.md') && (fileExists(route) === true)) {
        return console.log('Su archivo no es de tipo Markdown'.red);
    }

    // Case: No existe
    else if (fileExists(route) === false) {
        return console.log('La ruta no existe, verifique la ruta y vuelva a ingresar'.red)
    }
}


module.exports = {
    questionIsAbsolute,
    pathConvertedToAbsolute,
    pathAbsoluteOrRelative,
    pathNormalize,
    fileExists,
    pathExtName,
    fileAccess
};
