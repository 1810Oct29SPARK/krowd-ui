export class Event {
    id: number;
    name: string;
    category: string;

    date: Date;
    time: TimeRanges; // Optional
    address: string;
    city: string;
    state: string;
    zip: number;
    ratingScore: number;
    flagScore: number;
    hostId: number;

    constructor(id: number, name: string, category: string, date: Date, time: TimeRanges, address: string, ratingScore: number, flagScore: number, zip: number, hostId: number){
        this.id = id;
        this.name = name;
        this.category = category;
        this.date = date;
        this.time = time;
        this.address = address;
        this.ratingScore = ratingScore;
        this.flagScore = flagScore;
        this.zip = zip;
        this.hostId = hostId;
    }
