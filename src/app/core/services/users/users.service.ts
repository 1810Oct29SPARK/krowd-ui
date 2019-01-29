import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/shared/models/user';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user: User = null;

  httpHeaders = new HttpHeaders({
    'Content-Type': 'application.json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type'
  });

  constructor(private httpClient: HttpClient, user: User) { }

  // ready
  getAllUsers() {
    return this.httpClient.get<User[]>('http://localhost:8085/user/all')
      .map(
        (user: any) => {
          console.log(user);
        },
      )
      .catch(
        (error) => {
          console.log('UserServiceError: @getAllUsers()');
          return Observable.throw(error);
        }
      );
  }

  // ********************************************
  // Implemented By Sercurity team, Not ready Yet
  // ********************************************
  addUser(user: User) {
    return this.httpClient.post(`http://localhost:8085`, user);
  }

  // updateUser(event: Event) {
  //   return this.httpClient.put(`http://localhost:8083`), {'id': id, 'Created': Date};
  // }

  getUserById(userid: number) {
    return this.httpClient.get<User[]>(`http://localhost:8085/user/${userid}`)
      .map(
        (user: any) => {
          console.log(user);
        },
      )
      .catch(
        (error) => {
          console.log('UserServiceError: @getUserById()');
          return Observable.throw(error);
        }
      );
  }

  getUserByEventId(eventId: number) {
    return this.httpClient.get<User[]>(`http://localhost:8085/userEvent/userByEvent/${eventId}`)
      .map(
        (user: any) => {
          console.log(user);
        },
      )
      .catch(
        (error) => {
          console.log('UserServiceError: @getUserByEventId()');
          return Observable.throw(error);
        }
      );
  }

  getUsersByAccountStatus(accountStatus: number) {
    return this.httpClient.get<User[]>(`http://localhost:8085/${accountStatus}`)
      .map(
        (event: any[]) => {
          console.log(event);
        },
      )
      .catch(
        (error) => {
          console.log('AdminService: @getUserByAccountStatus()');
          return Observable.throw(error);
        }
      );
  }

  getFlaggedUsers(flagScore: number) {
    return this.httpClient.get<User[]>(`http://localhost:8085/${flagScore}`)
      .map(
        (event: any[]) => {
          console.log(event);
        },
      )
      .catch(
        (error) => {
          console.log('AdminService: @getUserByFlagScore()');
          return Observable.throw(error);
        }
      );
  }
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

  addAttendee(userId: number, eventId: number) {
    return this.httpClient.post(`http:/localhost:8085/userEvent/addUserEvent`, { uId: userId, eId: eventId });
  }

  //
  // not ready : server-Side does not have the referencing method
  //
  deleteAttendee(userId: number, eventId: number) {
    return this.httpClient.post(`http:/localhost:8083/${userId}/${eventId}`, { uId: userId, eId: eventId });
  }

  getUserReputation(userId: number) {
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
