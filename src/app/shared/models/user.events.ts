/**
 * @author Max and JeremyS
 */

import { User } from './user';
import { Event } from './event';

export class UserEvents {

    id: number;
    user: User;
    event: Event;
    rating: number; // possibly deprecated by #Server-side

    constructor(
        id: number,
        user: User,
        event: Event,
        rating: number
    ) {
        this.id = id;
        this.user = user;
        this.event = event;
        this.rating = rating;
    }

}
