import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {
  searchStr: string;
  newReleases: [] = []
  rec: [] = []
  lNew: [] = []
  categ: [] = []

  newRDet: any;

  url = window.location;
  access_token = new URLSearchParams(this.url.hash).get('#access_token');
  isLogged: boolean;

  user
  id

  constructor(public spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.getNew();
    this.getRec();
    this.getNewLocal();
    this.getCategories();

    this.checkLogged()
  }

  getToken(){
    return localStorage.getItem('access_token')
  }

  getNew(){
    this.spotifyService.getNew(this.getToken()).subscribe(newReleases => {this.newReleases = newReleases;})
    console.log(this.newReleases)
  }

  getRec(){
    this.spotifyService.getRec(this.getToken()).subscribe(rec => {this.rec = rec;})
    console.log(this.rec)
  }

  getNewLocal(){
    this.spotifyService.getLocalNew(this.getToken()).subscribe(lNew => {this.lNew = lNew;})
    console.log(this.lNew)
  }

  getCategories(){
    this.spotifyService.getCategories(this.getToken()).subscribe(categ => {this.categ = categ;})
    console.log(this.categ)
  }

  getNewRDetail(id: string) {
    this.spotifyService.getAlbumDetail(id, this.getToken()).subscribe(newRDet => {this.newRDet = newRDet})
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
