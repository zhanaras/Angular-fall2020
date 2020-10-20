import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Albums } from '../interfaces/albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(
    private http: HttpClient
  ) { }

  getAlbums(): Observable<Albums[]>{
    let user = JSON.parse(localStorage.getItem('currentUser'))
    let token = user.access_token
    return this.http.get<Albums[]>(`http://localhost:3000/albums`, {
      headers: {
        Authorization: `${token}`
      },
    })
  }

  getAlbumByUser(userId: number): Observable<any>{
    return this.http.get<Albums>(`http://localhost:3000/users/${userId}/albums`);
  }
}
