class ArrayOfAny<T> {
    constructor(private collection: T[]) {};

    get(index: number): T {
        return this.collection[index];
    }
}

class ArrayOfNumbers {
    constructor(private collection: number[]) {}

    get(index: number): number {
        return this.collection[index];
    }
}

class ArrayOfString {
    constructor(private collection: string[]) {}

    get(index: number): string {
        return this.collection[index];
    }
}

const col = new ArrayOfAny<string>(["1", "2"]); //RECOMENDADA
const col2 = new ArrayOfAny([1,2,3]); // por inferencia

console.log(col.get(0));

// FUNCIONES
function printString(arr: string[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function printNumber(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function printAny<T>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printAny<string>(["a", "b", "c"]);

// Constraint
interface Media {
    print(): void;
}

class Movie implements Media {
    constructor(private name: string) {};

    print(): void {
        console.log(`serie ${this.name}`);
    }
}
class TVShow implements Media {
    constructor(private name: string) {};

    print(): void {
        console.log(`serie ${this.name}`);
    }
}

function printMedia<T extends Media>(medias: T[]) {
    medias.forEach((media) => {
        media.print();
    })
}

const movie = new Movie('goodfellas');
const tvShow = new TVShow('breaking bad');

const media: Media[] = [movie, tvShow];


// KeyOf
function findValue<T extends object, U extends keyof T>(object: T, key: U) {
    return object[key];
}

findValue({name: "rodrigo"}, "name");

// Built-in typescript
class Vehicle {
    branch: string = "";
    model: string = "";
}

function createVehicle(): Vehicle {
    const vehicle: Partial<Vehicle> = {};
    vehicle.branch = "Ford";
    return vehicle as Vehicle;
}

let cars: Readonly<string[]> = ["ford", "mazda"];

