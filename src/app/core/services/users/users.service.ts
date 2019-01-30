import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/shared/models/user';
import { Observable, throwError } from 'rxjs';
import { HttpService } from '../http/http.service';

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

  constructor(private httpClient: HttpClient) { }

  // ready
  getAllUsers() {
    return this.httpClient.get<User[]>(HttpService.baseUrl + 'user/all')
      .map(
        (user: any) => {
          console.log(user);
        },
      )
      .catch(
        (error) => {
          console.log('UserServiceError: @getAllUsers()');
          return throwError(error);
        }
      );
  }

  // updateUser(event: Event) {
  //   return this.httpClient.put(`http://localhost:8083`), {'id': id, 'Created': Date};
  // }

  registerUser(username: string, email: string, firstname: string, lastname: string) {
    return this.httpClient.post('http://localhost:8085/user/create', {
      'username': username,
      'email': email,
      'firstname': firstname,
      'lastname': lastname,
      'reputation': 0,
      'roleId': 2
    });

  }

  getUserByUsername(username: string): Observable<any> { 
    return this.httpClient.get(HttpService.baseUrl + `user/${username}`);
  }

  getUserById(userid: number) {
    return this.httpClient.get<User[]>(HttpService.baseUrl + `user/${userid}`)
      .map(
        (user: any) => {
          console.log(user);
        },
      )
      .catch(
        (error) => {
          console.log('UserServiceError: @getUserById()');
          return throwError(error);
        }
      );
  }

  getUserByEventId(eventId: number) {
    return this.httpClient.get<User[]>(HttpService.baseUrl + `userEvent/userByEvent/${eventId}`)
      .map(
        (user: any) => {
          console.log(user);
        },
      )
      .catch(
        (error) => {
          console.log('UserServiceError: @getUserByEventId()');
          return throwError(error);
        }
      );
  }

  getUsersByAccountStatus(accountStatus: number) {
    return this.httpClient.get<User[]>(HttpService.baseUrl + `${accountStatus}`)
      .map(
        (event: any[]) => {
          console.log(event);
        },
      )
      .catch(
        (error) => {
          console.log('AdminService: @getUserByAccountStatus()');
          return throwError(error);
        }
      );
  }

  getFlaggedUsers(flagScore: number) {
    return this.httpClient.get<User[]>(HttpService.baseUrl + `${flagScore}`)
      .map(
        (event: any[]) => {
          console.log(event);
        },
      )
      .catch(
        (error) => {
          console.log('AdminService: @getUserByFlagScore()');
          return throwError(error);
        }
      );
  }
  getUsersAttendingEvent(eventId: number) {
    return this.httpClient.get<User[]>(HttpService.baseUrl + `userEvent/userByEvent/${eventId}`)
      .map(
        (event: any[]) => {
          console.log(event);
        },
      )
      .catch(
        (error) => {
          console.log('UserEventService: @getUsersAttendingEvent()');
          return throwError(error);
        }
      );
  }

  addAttendee(userId: number, eventId: number) {
    return this.httpClient.post(HttpService.baseUrl + `userEvent/addUserEvent`, { uId: userId, eId: eventId });
  }

  //
  // not ready : server-Side does not have the referencing method
  //
  deleteAttendee(userId: number, eventId: number) {
    return this.httpClient.post(HttpService.baseUrl + `${userId}/${eventId}`, { uId: userId, eId: eventId });
  }

  getUserReputation(userId: number) {
    return this.httpClient.get(HttpService.baseUrl + `userEvent/getReputation/${userId}`)
      .map(
        (event: any) => {
          console.log(event);
        },
      )
      .catch(
        (error) => {
          console.log('UserEvent ServiceError: @getReputationByUserId');
          return throwError(error);
        }
      );
  }

}
