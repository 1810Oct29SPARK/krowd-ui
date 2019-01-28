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

  getAllUsers() {
    return this.httpClient.get<User[]>('http://localhost:8083/')
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

  addUser(user: User) {
    return this.httpClient.post(`http://localhost:8083`, user);
  }
  // updateEvent(event: Event) {
  //   return this.httpClient.put(`http://localhost:8083`), {'id': id, 'Created': Date};
  // }

  getUserById(userid: number) {
    return this.httpClient.get<User[]>(`http://localhost:8083/${userid}`)
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
    return this.httpClient.get<User[]>(`http://localhost:8083/${eventId}`)
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

}
