import { Time } from "@angular/common";

export class Comment {
    id: number;
    description: string;
    postedBy: number; //FK
    time: Time; //Optional
    flagScore: number;
    eventId: number; //FK
}
