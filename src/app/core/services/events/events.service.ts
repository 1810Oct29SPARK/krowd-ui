import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import 'rxjs';

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

  constructor(private httpClient: HttpClient) { }

  getAllEvents() {
    return this.httpClient.get<Event[]>('http://localhost:8083/');
  }

  addEvent(event: Event) {
    return this.httpClient.post(`http://localhost:8083`, event);
  }
  // updateEvent(event: Event) {
  //   return this.httpClient.put(`http://localhost:8080`), {'id': id, 'Created': Date};
  // }

  getEventById(id: number) {
    return this.httpClient.get<Event[]>(`http://localhost:8083`);
  }
  getEventsByCategory(categoryID: number) {
    return this.httpClient.get<Event[]>(`http://localhost:8080/${categoryID}`);
  }
  getEventsByUderId(userid: number) {
    return this.httpClient.get<Event[]>(`http://localhost:8080/${userid}`);
  }

  registerForEvent(eventId: number, userId: number) {
    return this.httpClient.post('', eventId);
  }
}
