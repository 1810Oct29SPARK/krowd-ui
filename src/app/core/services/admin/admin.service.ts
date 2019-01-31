import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../../services/http/http.service';
import { User } from 'src/app/shared/models/user';
import { Event } from 'src/app/shared/models/event';
import { Comment } from 'src/app/shared/models/comment';
import { Admin } from 'src/app/shared/models/admin';
import { Observable, throwError } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/catch';


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
          return throwError(error);
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
          return throwError(error);
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
          return throwError(error);
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
          return throwError(error);
        }
      );
  }

}
