/**
 * @author Max and JeremyS
 */

import { Time } from '@angular/common';
import {User} from './user';
import {Event} from './event';

export class Comment {

    id: number;
    comment: string;
    flag: number;
    time: any;
    userId: User;
    eventId: Event; 

    constructor(
        id: number,
        comment: string,
        userId: User,
        time: any,
        flag: number,
        eventId: Event
    ) {
        this.id = id;
        this.comment = comment;
        this.userId = userId;
        this.time = time;
        this.flag = flag;
        this.eventId = eventId;
    }

}
