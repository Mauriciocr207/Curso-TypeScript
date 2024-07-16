import Mappable from "../Interfaces/Mappable";
import Person from "./Person";

export default class MyHome implements Mappable {
    private location: {
        lat: number,
        lng: number,
    };

    constructor(passenger: Person) {
        this.location = { 
            lat: passenger.getLocation.lat + 0.0002,
            lng: passenger.getLocation.lng + 0.0001,
        }
    }

    get getLocation() {
        return this.location;
    };

    markerTitle(address: string): string {
        return `La dirección de mi casa es ${address}`;
    }
}