export class Event {

    id: number;
    name: string;
    category: number;
    date: Date;
    time: any; // Optional
    address: string;
    apartment: string;
    city: string;
    state: string;
    zip: number;
    ratingScore: number;
    flag: number;
    hostId: number;
    description: string;
    picture: string;

    constructor(
        id: number,
        name: string,
        category: number,
        date: Date,
        time: any,
        address: string,
        apartment: string,
        city: string,
        state: string,
        zip: number,
        ratingScore: number,
        flag: number,
        hostId: number,
        picture: string
    ) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.date = date;
        this.time = time;
        this.address = address;
        this.apartment = apartment;
        this.city = city,
            this.state = state,
            this.zip = zip;
        this.ratingScore = ratingScore;
        this.flag = flag;
        this.hostId = hostId;
        this.picture = picture;
    }

}
