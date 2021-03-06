import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
import { AuthService } from '../../services/auth.service'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogged: boolean

  url = window.location;
  access_token = new URLSearchParams(this.url.hash).get('#access_token');

  user
  id: string

  constructor(private route: ActivatedRoute,
    private authService: AuthService,
    private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.checkLogged()
  }

  getAuth(){
    this.authService.getToken()
    localStorage.setItem('access_token', this.access_token)
  }

  logout(){
    this.authService.logout()
    localStorage.clear()
  }

  checkLogged(){
    if(this.access_token!= null){
      this.isLogged = true;
    }
    else if(this.access_token == ''){
      this.isLogged = false
    }
    console.log(this.isLogged)
  }

  getToken(){
    return localStorage.getItem('access_token')
  }
}
