import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Users } from 'src/app/interfaces/users'
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LoginResponse } from 'src/app/interfaces/login-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private currentUserSubject: BehaviorSubject<Users>;
  public currentUser: Observable<Users>;

  constructor(public http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Users>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
   }

   public get currentUserValue(): Users {
    return this.currentUserSubject.value;
}

   login(username: string, password: string) {
    return this.http.post<any>(`http://localhost:3000/sign-in`, { username, password })
        .pipe(map(user => {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
}

logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
}

// register(newuser: any){
//   return this.http.post(`http://localhost:3000/users`, {
//     name: newuser.name,
//     username: newuser.username,
//     email: newuser.email,
//     password: newuser.password,
//     address: {
//         street: newuser.street,
//         suite: newuser.suite,
//         city: newuser.city,
//         zipcode: newuser.zipcode,
//         geo: {
//             lat: newuser.lat,
//             lng: newuser.lng
//         }
//     },
//     phone: newuser.phone,
//     website: newuser.website,
//     company: {
//         name: newuser.companyName,
//         catchPhrase: newuser.catchPhrase,
//         bs: newuser.bs
//     }
// })
// }

}

