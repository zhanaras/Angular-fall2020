import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service'

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent implements OnInit {
  artistDet
  id
  albums: [] = []
  singles: [] = []
  appears: [] = []
  isFollowing

  url = window.location;
  access_token = new URLSearchParams(this.url.hash).get('#access_token');

  constructor(private spotifyService: SpotifyService,
    public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getArtistDetails()
    this.getArtistAlbums()
    this.getArtistSingles()
    this.getArtistAppears()
    this.checkFollow()
  }

  getToken(){
    return localStorage.getItem('access_token')
  }

  getArtistDetails(){
    this.id = this.route.snapshot.paramMap.get('id')
    this.spotifyService.getArtistDetail(this.id, this.getToken()).subscribe(artistDet => {this.artistDet = artistDet;
    console.log(artistDet)})
  }

  getArtistAlbums(){
    this.id = this.route.snapshot.paramMap.get('id')
    this.spotifyService.getArtistAlbums(this.id, this.getToken()).subscribe(albums => {this.albums = albums;
    console.log(albums)})
  }

  getArtistSingles(){
    this.id = this.route.snapshot.paramMap.get('id')
    this.spotifyService.getArtistSingles(this.id, this.getToken()).subscribe(singles => {this.singles = singles;
    console.log(singles)})
  }

  getArtistAppears(){
    this.id = this.route.snapshot.paramMap.get('id')
    this.spotifyService.getArtistAppears(this.id, this.getToken()).subscribe(appears => {this.appears = appears;
    console.log(appears)})
  }

  checkFollow(){
    let a_id = this.route.snapshot.paramMap.get('id')
    this.spotifyService.checkFollowArtist(a_id, this.getToken()).subscribe(
      data => {console.log(data);
      this.isFollowing = data})
  }

  unfollow(){
    let a_id = this.route.snapshot.paramMap.get('id')
    this.spotifyService.unfollowArtist(a_id, this.getToken()).subscribe(
      data => {console.log(data);})
  }

  follow(){
    let a_id = this.route.snapshot.paramMap.get('id')
    this.spotifyService.followArtist(a_id, this.getToken()).subscribe(
      data => {console.log(data);})
  }

}
