import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  CLIENT_ID = '' //client ID from your profile
  REDIRECT_URL = 'http:%2F%2Flocalhost:4200'

  constructor(private _http: HttpClient) { }

  getToken(){
    window.location.assign("https://accounts.spotify.com/authorize?client_id=" + this.CLIENT_ID + 
    '&redirect_uri=' + this.REDIRECT_URL + '&response_type=token&scope=user-read-private%20user-follow-modify%20user-library-read%20playlist-modify-public%20playlist-modify-private%20playlist-read-private%20playlist-read-collaborative%20user-follow-read');
  }

  logout(){
    window.location.assign("http://localhost:4200/");
  }
}
