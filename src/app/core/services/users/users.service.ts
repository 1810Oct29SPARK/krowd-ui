import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application.json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  constructor(private httpClient: HttpClient) { }

//   getAllUsers() {
//     return this.httpClient.get<User[]>('http://localhost:8083/');
//   }

//   addUser(user: User) {
//     return this.httpClient.post(`http://localhost:8083`, user);
//   }
  // updateEvent(event: Event) {
  //   return this.httpClient.put(`http://localhost:8080`), {'id': id, 'Created': Date};
  // }


//   getUserById(id: number) {
//     return this.httpClient.get<User[]>(`http://localhost:8083`);
//   }
//   getUserByEventId(commentId: number) {
//     return this.httpClient.get<User[]>(`http://localhost:8080/${commentId}`);
//   }
}
