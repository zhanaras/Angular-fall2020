import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service'

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {
  category
  playlists: [] = []
  id

  url = window.location;
  access_token = new URLSearchParams(this.url.hash).get('#access_token');

  constructor(private spotifyService: SpotifyService,
    public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCategory()
    this.getCategoryPlaylists()
  }

  getToken(){
    return localStorage.getItem('access_token')
  }

  getCategory(){
    this.id = this.id = this.route.snapshot.paramMap.get('id')
    this.spotifyService.getCategory(this.id, this.getToken()).subscribe(category => {this.category = category;
    console.log(category)})
  }

  getCategoryPlaylists(){
    this.id = this.id = this.route.snapshot.paramMap.get('id')
    this.spotifyService.getCategoryPlaylists(this.id, this.getToken()).subscribe(playlists => {this.playlists = playlists;
    console.log(playlists)})
  }

}
