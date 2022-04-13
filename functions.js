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

const pathExists = (route) => fs.existsSync(route); // Función para corroborar si la ruta existe

const pathExtName = (route) => path.extname(route);


const fileAccess = (route) => {
    // Acceder al archivo SI su extensión es '.md' y SI el archivo existe
    if ((pathExtName(route) === '.md') && (pathExists(route) === true)) {
        console.log('Leyendo archivo'.magenta);
        //console.log(readingFile(pathTransformed));
    }
    
    // Case: Existe pero no es un archivo md
    else if ((pathExtname(route) !== '.md') && (pathExists(route) === true)) {
        return console.log('Su archivo no es de tipo Markdown'.red);
    }
    
    // Case: No existe
    else if (pathExists(route) === false) {
        return console.log('La ruta no existe, verifique la ruta y vuelva a ingresar'.red)
    }
}


module.exports = {
    pathAbsoluteOrRelative,
    pathNormalize,
    fileAccess
};
