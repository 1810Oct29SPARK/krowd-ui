import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { CognitoService } from './cognito.service';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(public cognitoService: CognitoService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('beginning of interceptor');
    console.log(localStorage.getItem('accessToken'));
    request = request.clone(
      {
        setHeaders: {
          Authorization: localStorage.getItem('accessToken')
        }
      });
    return next.handle(request);
  }

  // NolaWolfe
  // Juice_Man14
}
