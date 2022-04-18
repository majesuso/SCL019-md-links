const functions = require('./functions.js');

let routeAbsoluteExists = '/Users/usuario/Desktop/Laboratoria/SCL019-md-links/README.md',
    routeRelativeExists = 'README.md',
    routeAbsoluteNotExist = '/Users/usuario/Desktop/Laboratoria/SCL019-md-links/HelloWorld.md',
    routeDifferentExt = '/Users/usuario/Desktop/Laboratoria/SCL019-md-links/package.json';

describe('la ruta es absoluta o no', () => {
    test('debería retornar true si es absoluta', () => {
        let isAbsolute =  functions.questionIsAbsolute(routeAbsoluteExists);
        expect(isAbsolute).toBe(true);
    });
    test('debería retornar false si es relativa', () => {
        let isRelative = functions.questionIsAbsolute(routeRelativeExists);
        expect(isRelative).toBe(false);
    });
});

describe('convertir ruta relativa a absoluta', () => {
    test('debería retornar una ruta absoluta', () => {
        let routeRelative = functions.pathConvertedToAbsolute(routeRelativeExists);
        expect(routeRelative).toBe(routeAbsoluteExists);
    });
});

describe('si la ruta es relativa debería retornar la función pathConvertedToAbsolute si no, retorna la ruta intacta', () =>{
    test('si la ruta es relativa debería retornar la funcón pathConvertedToAbsolute', () => {
        let routeRelative = functions.pathAbsoluteOrRelative(routeRelativeExists);
        expect(routeRelative).toBe(routeAbsoluteExists); //no retorna lo que se espera
    });
    test('si la ruta es absoluta debería retornar la ruta ingresada sin cambios', () => {
        let routeAbsolute = functions.pathAbsoluteOrRelative(routeAbsoluteExists)
        expect(routeAbsolute).toBe(routeAbsoluteExists);
    });
});

describe('verificar si el archivo existe o no', () => {
    test('si la ruta existe debería retornar true', () => {
        let routeExists = functions.fileExists(routeAbsoluteExists)
        expect(routeExists).toBe(true);
    });
    test('si la ruta no existe debería retornar false', () => {
        let routeNotExist = functions.fileExists(routeAbsoluteNotExist)
        expect(routeNotExist).toBe(false);
    })
});

describe('obtener la extensión del archivo', () => {
    test('archivo de tipo markdowm debería retornar .md', () => {
        let fileMd = functions.pathExtName(routeAbsoluteExists);
        expect(fileMd).toBe('.md');
    });
    test('archivo de tipo json debería retornar .json', () => {
        let fileJson = functions.pathExtName(routeDifferentExt);
        expect(fileJson).toBe('.json');
    });
});

describe('acceder al archivo si la ruta existe y tiene extensión .md', () => {
    test('debería retornar true', () => {
        let fileMdExists = functions.fileAccess(routeAbsoluteExists);
        expect(fileMdExists).toBe(true);
    });
    test('debería retornar su archivo no es de tipo Markdown', () => {
        let fileJsonExists = functions.fileAccess(routeDifferentExt);
        expect(fileJsonExists).toBe(console.log('Su archivo no es de tipo Markdown'.red));
    });
    test('debería retornar la ruta no existe, verifique la ruta y vuelva a ingresar', () => {
        let fileNotExists = functions.fileAccess(routeAbsoluteNotExist);
        expect(fileNotExists).toBe(console.log('La ruta no existe, verifique la ruta y vuelva a ingresar'.red));
    });
});