import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/models/user';
import { Event } from 'src/app/shared/models/event';
import { Comment } from 'src/app/shared/models/comment';
import { Admin } from 'src/app/shared/models/admin';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/catch';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient, user: User, event: Event, comment: Comment, admin: Admin) { }

// ********************************************************
// Not Complete: Server-Side hasnt completed Controller Yet
// ********************************************************

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
          return Observable.throw(error);
        }
      );
  }

  getUsersByFlagScore(flagScore: number) {
    return this.httpClient.get<User[]>(HttpService.baseUrl + `${flagScore}`)
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

  getCommentsByFlagScore(flagScore: number) {
    return this.httpClient.get<User[]>(HttpService.baseUrl + `${flagScore}`)
      .map(
        (event: any[]) => {
          console.log(event);
        },
      )
      .catch(
        (error) => {
          console.log('AdminService: @getCommentsByFlagScore()');
          return Observable.throw(error);
        }
      );
  }

  getEventsByFlagScore(flagScore: number) {
    return this.httpClient.get<Event[]>(HttpService.baseUrl + `event/byFlag`)
      .map(
        (event: any[]) => {
          console.log(event);
        },
      )
      .catch(
        (error) => {
          console.log('AdminService: @getEventByFlagScore()');
          return Observable.throw(error);
        }
      );
  }

}
