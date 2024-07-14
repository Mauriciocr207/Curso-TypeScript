/**
 *  TIPOS BÁSICOS - TIPOS PRIMITIVOS
 */

let vehiculo: string;
// let vehiculo = "hola";
// vehiculo = 2; //Error
let cantidad: number;
let esAuto: boolean;
let undef: undefined;
let nullValue: null;
let bigintValue: bigint;
let symbolValue: symbol;

cantidad = 2*4;

/**
 * TIPOS OBJECTS
 */
let obj:object;
obj = {};
const obj2: {
    hola:string
    obj: {
        saludo: string
    }
} = {
    hola:'hola mundo',
    obj: {
        saludo: 'hola desde obj'
    }
}

let persona = {
    nombre: 'mauricio',
    edad: 23,
    direccion: {
        calle: 'los presidentes',
        comuna: ''
    },
    cursos: ['curso 1', 'curso 2', 'curso 3']
}

console.log(persona);


/**
 * ARRAYS
 */
let hobbies: string[];

hobbies = [""];

console.log(hobbies);

let anyArr: any[];
anyArr = [1,"", null, undefined];


/**
 * TUPLAS
 */
const automovil: [string, number, string] = ["mazda", 2020, "rojo"];
// automovil[1] = "otro valor"; //Error

type vehictuloType = [string, number, string];

let automovil2: vehictuloType = ['mazda', 2020, 'rojo'];
let motocicleta: vehictuloType = ['yamaha', 2020, 'rojo'];


/**
 * ENUMS
 */
enum role {
    estudiante,
    profesor
}

const persona2 = {
    nombre: 'Rodrigo',
    edad: 34,
    direccion: {
        calle: 'presidentes',
        comuna: 'santiago'
    },
    cursos: ['flutter', 'js', 'SQL'],
    role: role.profesor
}

/**
 * ANY
 */
const anyArr2: any[] = ['futbol', 1, 'Leer'];


/**
 * LITERAL
 */
let vehiculo2: "automovil";
// vehiculo2 = "hola"; // Error

function printText(s: string, alignment: "left" | "right" | "center") {
    // ...
}
printText("Hello, world", "left");
// printText("G'day, mate", "centre"); // Error