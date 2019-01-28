import { Time } from '@angular/common';

export class Comment {

    id: number;
    description: string;

    postedBy: number; // FK
    time: any; // Optional

    flagScore: number;
    eventId: number; // FK

    constructor(
        id: number,
        description: string,
        postedBy: number,
        time: any,
        flagScore: number,
        eventId: number
    ) {
        this.id = id;
        this.description = description;
        this.postedBy = postedBy;
        this.time = time;
        this.flagScore = flagScore;
        this.eventId = eventId;
    }

}
