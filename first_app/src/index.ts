function sumar(valor1, valor2: number, unusedParam: string): number {
    const show = 10;
    const result = valor1 + valor2;
    if(valor1 > 2) return result; //Implicit return - noImplicitReturn: true in tsconfig.json
}

let valor1: number;
let valor2: number;

valor1 = 2;
valor2 = 3;

 
console.log(sumar(2,2));

let edad: number = 21;
let element = document.getElementById('id')!;
console.log(element.innerHTML)
edad = 24;
console.log(edad); // comentario de