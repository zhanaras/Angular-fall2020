import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  CLIENT_ID = '2aec452ed4414487a396c917ffa93b6f'
  REDIRECT_URL = 'http:%2F%2Flocalhost:4200'

  constructor(private _http: HttpClient) { }

  getToken(){
    window.location.assign("https://accounts.spotify.com/authorize?client_id=" + this.CLIENT_ID + 
    '&redirect_uri=' + this.REDIRECT_URL + '&response_type=token&scope=user-read-private%20user-read-email%20playlist-modify-public%20playlist-modify-private%20playlist-read-private%20playlist-read-collaborative');
  }

  logout(){
    window.location.assign("http://localhost:4200/");
  }
}
