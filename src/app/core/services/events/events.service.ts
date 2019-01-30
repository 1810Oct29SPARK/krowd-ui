import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Event } from 'src/app/shared/models/event';
import { Comment } from 'src/app/shared/models/comment'
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { HttpService } from 'src/app/core/services/http/http.service';

import 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private events: Event[] = [];
  private something: Event[] = [];
  private everything: Comment[] =[];
  private comments: Comment[] = [];

  httpHeaders = new HttpHeaders({
    'Content-Type': 'application.json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type'
  });

  constructor(private httpClient: HttpClient) {
  }

  getAllEvents() {
    return this.httpClient.get<Event[]>(HttpService.baseUrl+'/event/all')
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
    return this.httpClient.get<Event[]>(HttpService.baseUrl+`/userEvent/eventByUser/${userid}`)
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
    return this.httpClient.get<Event[]>(HttpService.baseUrl+'/event/byFlag')
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
  
  getFlaggedComments() {
    return this.httpClient.get<Comment[]>(HttpService.baseUrl+`/comment/getByFlag/1`)
      .map(
        (comments) => {
          let flaggedComment = comments;
          return flaggedComment;
        },
      )
      .catch(
        (error) => {
          console.log('AdminService: @getAllComments()');
          return Observable.throw(error);
        }
      );
  }

  addEvent(eventName: string, eventCategory: string, eventDate: string,
    eventAddress: string, eventApartment: string, eventCity: string, eventState: string, eventZip: string,
    eventDescription: string, eventFlag: number, userId: string, eventPhotoID: string) {
    console.log('in eventService');
    return this.httpClient.post(HttpService.baseUrl+`/event/add`, { name });
  }


  // *******************************************
  deleteEvent(event: Event) {
    return this.httpClient.delete(HttpService.baseUrl+`/event/delete`);
  }

  updateEvent(event: Event) {
    return this.httpClient.put(HttpService.baseUrl+`/update`, event);
  }

  getEventById(eventId: number) {
    return this.httpClient.get<Event[]>(HttpService.baseUrl+`/event/byId/${eventId}`)
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

    return this.httpClient.get<Event[]>(HttpService.baseUrl+`/byCategory/${categoryID}`)
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
    return this.httpClient.post(HttpService.baseUrl+`/userEvent/addUserEvent`, eventId);
  }

  // getFlaggedEvents(flagScore: number) {
  //   return this.httpClient.get<Event[]>(`http://localhost:8085/event/byFlag`)
  //     .map(
  //       (event: any[]) => {
  //         return this.something = event;
  //         console.log(this.something);
  //       },
  //     )
  //     .catch(
  //       (error) => {
  //         console.log('AdminService: @getEventByFlagScore()');
  //         return Observable.throw(error);
  //       }
  //     );
  // }


  getEventsUserAttending(userId: number) {
    return this.httpClient.get<Event[]>(HttpService.baseUrl+`/userEvent/eventByUser/${userId}`)
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
  return this.httpClient.get(HttpService.baseUrl+`/userEvent/scoreEvent/${eventId}`)
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
  return this.httpClient.put(HttpService.baseUrl+`/userEvent/rate`, {ratingScore});
}
}
