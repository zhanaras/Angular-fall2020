import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Injectable, Type} from "@angular/core";
import { LoginService } from '../services/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
  constructor(private loginService: LoginService,
    private http: HttpClient) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    let currentUser = this.loginService.currentUserValue;
    if (currentUser && currentUser.token) {
        request = request.clone({
            setHeaders: {
                'Authorization': `${currentUser.token}`,
                // 'Content-Type': 'application/json'
            }
        });
    }
    return next.handle(request);
}

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

//     const token = localStorage.getItem('token');
//     if (token){
//       const authReq = req.clone({
//         headers: req.headers.append('Authorization', `${token}`)
//       });
//       return next.handle(authReq);
//     }
//     return next.handle(req);
//   }
}