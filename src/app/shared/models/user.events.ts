/**
 * @author Max and JeremyS
 */

import { User } from './user';
import { Event } from './event';

export class UserEvents {

    userEventId: number;
    userId: User;
    eventId: Event;
    eventRating: number; // possibly deprecated by #Server-side

    constructor(
        userEventId: number,
        userId: User,
        eventId: Event,
        eventRating: number
    ) {
        this.userEventId = userEventId;
        this.userId = userId;
        this.eventId = eventId;
        this.eventRating = eventRating;
    }

}
