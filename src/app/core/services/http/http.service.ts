import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  
  // public static baseUrl = 'http://localhost:8085/';
  public static baseUrl = 'http://ec2-3-91-103-185.compute-1.amazonaws.com:8080/krowd-boot/';

}
