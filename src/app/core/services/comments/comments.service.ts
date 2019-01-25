import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  httpHeaders = new HttpHeaders({
    'Content-Type': 'application.json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type'
  });

  constructor(private httpClient: HttpClient) { }

  getAllComments() {
    return this.httpClient.get<Event[]>('http://localhost:8083/');
  }

  addComment(comment: Comment) {
    return this.httpClient.post(`http://localhost:8083`, comment);
  }
  // updateEvent(event: Event) {
  //   return this.httpClient.put(`http://localhost:8080`), {'id': id, 'Created': Date};
  // }



  getCommentById(id: number) {
    return this.httpClient.get<Comment[]>(`http://localhost:8083`);
  }
  getCommentsByUderId(userId: number) {
    return this.httpClient.get<Comment[]>(`http://localhost:8080/${userId}`);
  }
  getCommentByEventId(commentId: number) {
    return this.httpClient.get<Comment[]>(`http://localhost:8080/${commentId}`);
  }
}
