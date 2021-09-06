import * as faker from 'faker';
import { Mappble } from './CustomMap';


export class User implements Mappble{
    name: string
    location: {
        lat: number
        lng: number
    }

    color: string = 'black';

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()) ,
            lng: parseFloat(faker.address.longitude())
        }
    }

    addContentMarker(): string {
        return '<h1>This id user<h1/>'
    }



}

