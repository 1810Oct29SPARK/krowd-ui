import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { Event } from 'src/app/shared/models/event';
import { Observable } from 'rxjs';
import { HttpService } from '../../services/http/http.service'

import 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/catch';
import { Category } from 'src/app/shared/models/category';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private events: Event[] = [];
  private something: Event[] = [];

  httpHeaders = new HttpHeaders({
    'Content-Type': 'application.json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type'
  });

  constructor(private httpClient: HttpClient) {
  }

  getAllEvents() {
    return this.httpClient.get<Event[]>(HttpService.baseUrl +'event/all')
    .map((events) => {
      let eventData = events;
      return eventData;
    })
      .catch(
        (error) => {
          console.log('EventsService: @getAllEvents()');
          return Observable.throw(error);
        }
      );
  }

  getAllFlaggedEvents() {
    return this.httpClient.get<Event[]>(HttpService.baseUrl + 'event/byFlag')
    .map((events) => {
      let flaggedEvent = events;
      return flaggedEvent;
    })
      .catch(
        (error) => {
          console.log('EventsService: @getAllEvents()');
          return Observable.throw(error);
        }
      );
  }

  addEvent(eventName: string, eventCategory: string, eventDate: string,
    eventAddress: string, eventApartment: string, eventCity: string, eventState: string, eventZip: string,
    eventDescription: string, eventFlag: number, userId: string, eventPhotoID: string) {
    console.log('in eventService');
    return this.httpClient.post(`http://localhost:8085/event/add`, {name});
  }


  // *******************************************
  deleteEvent(event: Event) {
    return this.httpClient.post(HttpService.baseUrl + `event/delete/`, event);
  }

  updateEvent(event: Event) {
    return this.httpClient.put(HttpService.baseUrl + `update`, event);
  }

  getEventById(eventId: number) {
    return this.httpClient.get<Event[]>(HttpService.baseUrl + `event/byId/${eventId}`)
      .map(
        (event: any[]) => {
          let signleEvent = event;
          return signleEvent;
        },
      )
      .catch(
        (error) => {
          console.log('EventsService: @getEventById()');
          return Observable.throw(error);
        }
      );
  }


  getEventsByCategory(categoryID: number) {

    return this.httpClient.get<Event[]>(HttpService.baseUrl + `byCategory/${categoryID}`)
      .map(
        (event: any[]) => {
          console.log(event);
        },
      )
      .catch(
        (error) => {
          console.log('EventsService: @getEventsByCategory()');
          return Observable.throw(error);
        }
      );
  }

  getEventsByUserId(userid: number) {
    return this.httpClient.get<Event[]>(HttpService.baseUrl + `byUser/${userid}`)
      .map(
        (event: any[]) => {
          console.log(event);
        },
      )
      .catch(
        (error) => {
          console.log('EventsService: @getEventsByUserId()');
          return Observable.throw(error);
        }
      );
  }

  registerForEvent(eventId: number, userId: number) {
    return this.httpClient.post(`http://localhost:8085/userEvent/addUserEvent`, eventId);
  }

  getFlaggedEvents(flagScore: number) {
    return this.httpClient.get<Event[]>(`http://localhost:8085/event/byFlag`)
      .map(
        (event: any[]) => {
          return this.something = event;
          console.log(this.something);
        },
      )
      .catch(
        (error) => {
          console.log('AdminService: @getEventByFlagScore()');
          return Observable.throw(error);
        }
      );
  }

  getEventsUserAttending(userId: number) {
    return this.httpClient.get<Event[]>(`http://localhost:8085/userEvent/eventByUser/${userId}`)
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
}
