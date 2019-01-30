/**
 * @author Max and JeremyS
 */

export class Address {

    id: number;
    streetAddress: string;
    apartment: string;
    city: string;
    state: string;
    zip: number

    constructor(
        id: number,
        streetAddress: string,
        apartment: string,
        city: string,
        state: string,
        zip: number
    ) {
        this.id = id;
        this.streetAddress = streetAddress;
        this.apartment = apartment;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }

}