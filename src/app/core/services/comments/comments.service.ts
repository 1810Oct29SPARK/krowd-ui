import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Comment } from '../../../shared/models/comment';
import { HttpService } from '../../services/http/http.service'

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private comments: Comment[] = [];
  
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application.json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type'
  });

  constructor(private httpClient: HttpClient, comment: Comment) { }


  getAllComments() {
    return this.httpClient.get<Event[]>(HttpService.baseUrl);
  }

  addComment(comment: Comment) {
    return this.httpClient.post(HttpService.baseUrl, comment);
  }
  // updateEvent(event: Event) {
  //   return this.httpClient.put(`http://localhost:8080`), {'id': id, 'Created': Date};
  //

  getCommentById(id: number) {
    return this.httpClient.get<Comment[]>(HttpService.baseUrl);
  }

  getCommentsByUserId(userId: number) {
    return this.httpClient.get<Comment[]>(HttpService.baseUrl + `${userId}`);
  }

  getCommentByEventId(commentId: number) {
    return this.httpClient.get<Comment[]>(HttpService.baseUrl+ `${commentId}`);
  }

  getFlaggedComments(flagScore: number) {
    return this.httpClient.get<Comment[]>(`http://localhost:8085/${flagScore}`)
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


}
