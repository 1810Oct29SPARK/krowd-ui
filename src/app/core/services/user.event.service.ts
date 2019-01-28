import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/models/user';
import { Event } from 'src/app/shared/models/event';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/catch';

@Injectable({
    providedIn: 'root'
})

export class UserEventService {

    userId: number;
    eventId: number;

    getAttendee(userId: number, eventId: number) {
        this.userId = userId;
        this.eventId = eventId;
    }

    constructor(private httpClient: HttpClient, user: User, event: Event) { }

    getUsersAttendingEvent(userId: number, eventId: number) {
        return this.httpClient.get<User[]>(`http://localhost:8083/${userId}/${eventId}`)
            .map(
                (event: any[]) => {
                    console.log(event);
                },
            )
            .catch(
                (error) => {
                    console.log('UserEventService: @getUsersAttendingEvent()');
                    return Observable.throw(error);
                }
            );
    }

    getEventsUserAttending(userId: number, eventId: number) {
        return this.httpClient.get<User[]>(`http://localhost:8083/${userId}/${eventId}`)
            .map(
                (event: any[]) => {
                    console.log(event);
                },
            )
            .catch(
                (error) => {
                    console.log('UserEventService: @getUsersAttendingEvent()');
                    return Observable.throw(error);
                }
            );
    }

    addAttendee(userId: number, eventId: number) {
        return this.httpClient.post(`http:/localhost:8083/${userId}/${eventId}`, this.getAttendee);
    }

    deleteAttendee(userId: number, eventId: number) {
        return this.httpClient.post(`http:/localhost:8083/${userId}/${eventId}`, this.getAttendee);
    }

}
