import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Injectable} from "@angular/core";
import { SignUpService } from '../services/sign-up.service';

export class LogInterceptor implements HttpInterceptor {
    
    constructor(private loginService: SignUpService,
        private http: HttpClient) {
      }
    
      intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = this.loginService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `${currentUser.token}`,
                    // 'Content-Type': 'application/json'
                }
            });
        }
    
        return next.handle(request);
    }
}
