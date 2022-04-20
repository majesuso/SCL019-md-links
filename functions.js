const path = require('path');
const fs = require('fs');
const colors = require("colors");

const questionIsAbsolute = (route) => path.isAbsolute(route); // Verficar si la ruta es absoluta o relativa
const pathConvertedToAbsolute = (route) => path.resolve(route); // Convertir ruta relativa a absoluta

// Función que retorne la ruta absoluta según su caso, si es que es absoluta la retorna tal cual, si es que es relativa la transforma
const pathAbsoluteOrRelative = (route) => {
    return questionIsAbsolute(route) ? (route) : pathConvertedToAbsolute(route)
}

const pathNormalize = (route) => path.normalize(route); // Normaliza la ruta

const fileExists = (route) => fs.existsSync(route); // Función para corroborar si el archivo existe

const pathExtName = (route) => path.extname(route);

const fileAccess = (route) => {
    // Acceder al archivo SI su extensión es '.md' y SI el archivo existe
    if ((pathExtName(route) === '.md') && (fileExists(route) === true)) {
        console.log(`Leyendo archivo... \n`.magenta +
            ` ∧___∧\n(｡･ω･｡)つ━☆・*。 ¡WOOSH!\n⊂　　/　　 ・゜+. Aquí están tus resultados\nしーＪ　　　°。+`.white);
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
