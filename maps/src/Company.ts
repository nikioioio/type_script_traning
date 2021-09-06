import * as faker from 'faker';
import {Mappble} from "./CustomMap";



export class Company implements Mappble {
    companyName: string;
    catchPharse: string;
    location: {
        lat: number,
        lng: number
    };

    color: string = 'red';

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPharse = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    addContentMarker(): string {
        return '<h1>This id company<h1/>'
    }


}