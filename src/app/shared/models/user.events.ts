export class UserEvents {
    userId: number;
    eventId: number;
    eventRating: number; // possibly deprecated by #Server-side

    constructor(
        userId: number,
        eventId: number,
        eventRating: number
    ) {
        this.userId = userId;
        this.eventId = eventId;
        this.eventRating = eventRating;
    }
}
