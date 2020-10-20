import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  private currentUserSubject: BehaviorSubject<Users>;
  public currentUser: Observable<Users>;

  constructor(public http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Users>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
   }

   public get currentUserValue(): Users {
    return this.currentUserSubject.value;
}

register(newUser: Users){
  return this.http.post(`http://localhost:3000/users`, newUser
//   {
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
// }
)
}
}
