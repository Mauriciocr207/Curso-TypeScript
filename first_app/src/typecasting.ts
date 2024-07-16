const element = document.getElementById('inputText') as HTMLInputElement;
const element2 = <HTMLInputElement>document.querySelector('#inputText2');

console.log(element.value);
console.log(element2.value);