import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { User } from '../../interfaces/user';
import { Playlist } from '../../interfaces/playlist';
import { first } from 'rxjs/operators';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.scss']
})
export class CurrentUserComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private spotifyService: SpotifyService,
    private fb: FormBuilder) { }

    user
    albums: Playlist[] = []
    isNull: boolean
    id: string
    artists

    form: FormGroup;
    submitted = false;

    url = window.location;
    access_token = new URLSearchParams(this.url.hash).get('#access_token');

    newPlaylist = this.fb.group({
      name: ['', Validators.required],
      public: [true],
      collaborative: [false],
      description: [''],
    })

  ngOnInit(): void {
    this.getMe()
    this.getMyAlbums()
    this.getMyArtists()
    localStorage.setItem('user_id', 'fchwhev6bnzdii73cmwvl8i30')
  }

  get f(){
    return this.newPlaylist.controls
  }

  getToken(){
    return localStorage.getItem('access_token')
  }
 
  getMe(){
    this.spotifyService.getMyAccount(this.getToken()).subscribe(user => {this.user = user;
    this.id = user.id
    console.log(this.user);})
  }

  getMyAlbums(){
    this.spotifyService.getMyPlaylists(this.getToken()).subscribe(albums => {this.albums = albums;
    console.log(albums)})
  }

  getMyArtists(){
    this.spotifyService.getMyArtists(this.getToken()).subscribe(artists => {this.artists = artists;
    console.log(artists)})
  }

  createPlaylist(){
    this.id = this.user.id
    this.spotifyService.createPlaylist(this.id, this.f.name.value, this.f.public.value, this.f.collaborative.value, this.f.description.value, this.getToken())
      .subscribe(
        data => console.log(data))
  }
}
