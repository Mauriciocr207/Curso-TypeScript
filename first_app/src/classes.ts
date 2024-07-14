interface Billable {
    currentBill(): string;
}

interface Flyable {
    altitude(): string;
}

abstract class Vehicle {
    constructor(
        protected readonly brandName: string,
        private model: string,
        private color: string,
        private price: number
    ) {
        console.log('en constructor');
    }
    
    get getPrice() {
        return this.price;
    }

    get getModel() {
        return this.model;
    }

    get getColor() {
        return this.color;
    }

    set setPrice(value: number) {
        this.price = value;
    }

    abstract drive(): void;

    static priceToCurrency(value: number, typeOfCurrency:string): string {
        let result = "";

        if(typeOfCurrency === "USD") {
            result = "USD " + value;
        }
        if(typeOfCurrency === "MXN") {
            result = "$ " + value;  
        }

        return result;
    }

}

// const vehicle = new Vehicle("mazda", "2016", "white", 200);
// Object.defineProperty(vehicle, "brandName", {
//     value: 'City'
// });
// vehicle.drive();
// console.log(vehicle);
// console.log(Object.getOwnPropertyDescriptors(vehicle));

/**
 * Colocar propiedes como privadas en una clase, no implica
 * que no se puedan sobreescribir esas propiedades en las
 * instancias de esa clase en tiempo de ejecución. Es posible 
 * a través de el cambio de los descirptores de una propiedad 
 * utilizando Object.defineProperty()
 */


class Car extends Vehicle implements Billable{
    currentBill(): string {
        return "La factura actual es de 200";
    }
    drive(): void {
        console.log(`Estoy conduciendo un auto ${this.brandName}`);
    }
}
class Airplane extends Vehicle implements Billable, Flyable {

    drive(): void {
        console.log(`Estoy conduciendo un avión ${this.brandName}`);
    }

    currentBill(): string {
        return "La factura actual es de 200";
    }

    altitude(): string {
        return "altitud: 2000m";
    }
}

const car = new Car("mazda", "3", "rojo", 200);
car.drive();
console.log(car.getPrice);
car.setPrice = 10;
console.log(car.getPrice);
console.log(Car.priceToCurrency(10, "USD"));

const air = new Airplane("BA750", "3", "blanco", 400);
air.drive();
console.log(air.getPrice);
air.setPrice = 10;
console.log(air.getPrice);
console.log(Airplane.priceToCurrency(10, "USD"));