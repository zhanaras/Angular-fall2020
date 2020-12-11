import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {

  searchStr: string;
  artists: [] = []
  albums: [] = []
  tracks: [] = []
  playlists: [] = []
  shows: [] = []
  episodes: [] = []
  newReleases: [] = []
  rec: [] = []
  lNew: [] = []
  categ: [] = []

  url = window.location;
  access_token = new URLSearchParams(this.url.hash).get('#access_token');

  token;

  isLogged: boolean;

  constructor(public spotifyService: SpotifyService,
    private route: ActivatedRoute,
    private http: HttpClient,
    ) { }

  ngOnInit(): void {
    this.getNew();
    this.getRec();
    this.getNewLocal();
    this.getCategories();
    this.getTracks()

    // console.log(this.url)
    // console.log(this.url.hash)
    // console.log(this.access_token)

    localStorage.setItem('access_token', (this.access_token));

    console.log(this.getToken())
    this.checkLogged()
  }

  getToken(){
    return localStorage.getItem('access_token')
  }

  getArtists(){
    this.spotifyService.getArtists(this.searchStr, this.getToken()).subscribe(artists =>{this.artists = artists;})
  }

  getAlbums(){
    this.spotifyService.getAlbums(this.searchStr, this.getToken()).subscribe(albums => {this.albums = albums; })
  }

  getTracks(){
    this.spotifyService.getTracks(this.searchStr, this.getToken()).subscribe(tracks => {this.tracks = tracks; 
    console.log(tracks)})
  }

  getPlaylists(){
    this.spotifyService.getPlaylists(this.searchStr, this.getToken()).subscribe(playlists => {this.playlists = playlists;})
  }

  getShows(){
    this.spotifyService.getShows(this.searchStr, this.getToken()).subscribe(shows => {this.shows = shows;})
  }

  getEpisodes(){
    this.spotifyService.getEpisodes(this.searchStr, this.getToken()).subscribe(episodes => {this.episodes = episodes;})
  }

  getNew(){
    this.spotifyService.getNew(this.getToken()).subscribe(newReleases => {this.newReleases = newReleases;})
  }

  getRec(){
    this.spotifyService.getRec(this.getToken()).subscribe(rec => {this.rec = rec;})
  }

  getNewLocal(){
    this.spotifyService.getLocalNew(this.getToken()).subscribe(lNew => {this.lNew = lNew;})
  }

  getCategories(){
    this.spotifyService.getCategories(this.getToken()).subscribe(categ => {this.categ = categ;})
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
}
