import Mappable from "../Interfaces/Mappable";

export default abstract class Person implements Mappable {
    constructor(
        public name: string,
        public location: {
            lat: number,
            lng: number,
        }
    ) {
        this.name = name;
        this.location = {
            lat: location.lat,
            lng: location.lng
        }
    }

    get getLocation() {
        return this.location;
    }

    markerTitle(address: string): string {
        return `La dirección de ${this.name} es ${address}`;
    }
}