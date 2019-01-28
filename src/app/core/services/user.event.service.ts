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



    constructor(private httpClient: HttpClient, user: User, event: Event) { }

    getUsersAttendingEvent(eventId: number) {
        return this.httpClient.get<User[]>(`http://localhost:8085/userEvent/userByEvent/${eventId}`)
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

    getEventsUserAttending(userId: number) {
        return this.httpClient.get<User[]>(`http://localhost:8085/userEvent/eventByUser/${userId}`)
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
        return this.httpClient.post(`http:/localhost:8085/userEvent/addUserEvent`, { uId: userId, eId: eventId });
    }

    //
    // not ready : server-Side does not have the referencing method
    //
    deleteAttendee(userId: number, eventId: number) {
        return this.httpClient.post(`http:/localhost:8083/${userId}/${eventId}`, { uId: userId, eId: eventId });
    }

    getEventScore(eventId: number) {
        return this.httpClient.get(`http://localhost:8085/userEvent/scoreEvent/${eventId}`)
        .map(
            (event: any) => {
                console.log(event);
            },
        )
        .catch(
            (error) => {
                console.log('UserEventServiceError: @getEventScore');
                return Observable.throw(error);
            }
        );
    }

    rateEvent(ratingScore: number) {
        return this.httpClient.put(`http://localhost:8085:/userEvent/rate`, {ratingScore});
    }

    getReputationByUserId(userId: number) {
        return this.httpClient.get(`http://localhost:8085/userEvent/getReputation/${userId}`)
        .map(
            (event: any) => {
                console.log(event);
            },
        )
        .catch(
            (error) => {
                console.log('UserEvent ServiceError: @getReputationByUserId');
                return Observable.throw(error);
            }
        );
    }

}
