import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Event } from 'src/app/shared/models/event';
import { throwError } from 'rxjs';

import 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private events: Event[] = [];

  httpHeaders = new HttpHeaders({
    'Content-Type': 'application.json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type'
  });

  constructor(private httpClient: HttpClient) {
  }

  getAllEvents() {
    return this.httpClient.get<Event[]>('http://localhost:8085/event/all')
      .map((events) => {
        let eventData = events;
        return eventData;
      })
      .catch(
        (error) => {
          console.log('EventsService: @getAllEvents()');
          return throwError(error);
        }
      );
  }

  getEventsByUserId(userid: number) {
    return this.httpClient.get<Event[]>(`http://localhost:8085/userEvent/eventByUser/${userid}`)
      .map((events) => {
        let userEventData = events;
        return userEventData;
      },
      )
      .catch(
        (error) => {
          console.log('EventsService: @getEventsByUserId()');
          return throwError(error);
        }
      );
  }

  getAllFlaggedEvents() {
    return this.httpClient.get<Event[]>('http://localhost:8085/event/byFlag')
      .map((events) => {
        let flaggedEvent = events;
        return flaggedEvent;
      })
      .catch(
        (error) => {
          console.log('EventsService: @getAllEvents()');
          return throwError(error);
        }
      );
  }

  addEvent(eventName: string, eventCategory: string, eventDate: string,
    eventAddress: string, eventApartment: string, eventCity: string, eventState: string, eventZip: string,
    eventDescription: string, eventFlag: number, userId: string, eventPhotoID: string) {
    console.log('in eventService');
    return this.httpClient.post(`http://localhost:8085/event/add`, { name });
  }


  // *******************************************
  deleteEvent(event: Event) {
    return this.httpClient.post(`http://localhost:8085/event/delete/`, event);
  }

  updateEvent(event: Event) {
    return this.httpClient.put(`http://localhost:8085/update`, event);
  }

  getEventById(eventId: number) {
    return this.httpClient.get<Event[]>(`http://localhost:8085/event/byId/${eventId}`)
      .map(
        (event: any[]) => {
          let signleEvent = event;
          return signleEvent;
        },
      )
      .catch(
        (error) => {
          console.log('EventsService: @getEventById()');
          return throwError(error);
        }
      );
  }


  getEventsByCategory(categoryID: number) {

    return this.httpClient.get<Event[]>(`http://localhost:8085/byCategory/${categoryID}`)
      .map(
        (event: any[]) => {
          console.log(event);
        },
      )
      .catch(
        (error) => {
          console.log('EventsService: @getEventsByCategory()');
          return throwError(error);
        }
      );
  }

  registerForEvent(eventId: number, userId: number) {
    return this.httpClient.post(`http://localhost:8085/userEvent/addUserEvent`, eventId);
  }

}
