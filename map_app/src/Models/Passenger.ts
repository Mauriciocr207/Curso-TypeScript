import {faker} from "@faker-js/faker";
import Person from "./Person";

export default class Passenger extends Person {
    constructor() {
        super(
            faker.person.firstName(),
            {
                lat: faker.location.latitude(),
                lng: faker.location.longitude(),
            }
        )
    }
}