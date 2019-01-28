import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { Event } from 'src/app/shared/models/event';
import { Observable } from 'rxjs';

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
    return this.httpClient.get<Event[]>('http://localhost:8083/')
      .map(
        (event: any[]) => {
          console.log(event);
        },
      )
      .catch(
        (error) => {
          console.log('EventsService: @getAllEvents()');
          return Observable.throw(error);
        }
      );
  }

  addEvent(event: Event) {
    return this.httpClient.post(`http://localhost:8083`, event);
  }
  // updateEvent(event: Event) {
  //   return this.httpClient.put(`http://localhost:8080`), {'id': id, 'Created': Date};
  // }

  getEventById(id: number) {
    return this.httpClient.get<Event[]>(`http://localhost:8083/${id}`)
      .map(
        (event: any[]) => {
          console.log(event);
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

    return this.httpClient.get<Event[]>(`http://localhost:8080/${categoryID}`)
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
    return this.httpClient.get<Event[]>(`http://localhost:8080/${userid}`)
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
    return this.httpClient.post('', eventId);
  }

}
