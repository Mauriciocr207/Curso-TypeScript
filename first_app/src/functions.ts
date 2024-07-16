function sum(num1: number, num2: number) : number {
    return num1 + num2;
}

const arrowSum = (num1: number, num2: number) : number => num1 + num2;

function print(): void {
    console.log(sum(2,2));
}

print();

const returnUndefined = () : undefined => {
    return undefined;
    // return explicitly undefined
}

const doNothing = () : void => {
    // return implicitly undefined
};

const showError = (msg: string) : never => {
    throw new Error(msg);
    // never returns any value
}

/**
 * function type
 */
type functionSum = (a: number, b: number) => number;

let sumar_: functionSum;
let sumar2: Function;
sumar_ = sum;
sumar2 = sum;

console.log(sumar_(2,2));
console.log(sumar_(2,2));



function imprimir(
    a: number, 
    b: number, 
    mostrar: (value: number) => void
) : void {
    let result = a+b;
    mostrar(result);
}

imprimir(5,5, console.log);

