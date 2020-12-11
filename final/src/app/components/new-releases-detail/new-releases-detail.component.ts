import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-new-releases-detail',
  templateUrl: './new-releases-detail.component.html',
  styleUrls: ['./new-releases-detail.component.scss']
})
export class NewReleasesDetailComponent implements OnInit {

  newRDet;
  id: string;
  isExplicit: boolean

  url = window.location;
  access_token = new URLSearchParams(this.url.hash).get('#access_token');

  myPlaylists: [] = []

  user_playlist_id
  uris: [] = []

  constructor(private spotifyService: SpotifyService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getNewRDetail()
    this.getUserPlaylists()
  }

  getToken(){
    return localStorage.getItem('access_token')
  }

  getNewRDetail() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.spotifyService.getAlbumDetail(this.id, this.getToken())
                        .subscribe(newRDet => {this.newRDet = newRDet;
                        console.log(this.newRDet);
                      if(newRDet.tracks.items.explicit = true){
                        this.isExplicit = true
                      }
                      else{
                        this.isExplicit = false;
                      }
                    })
  }

  getUserPlaylists(){
    this.spotifyService.getMyPlaylists(this.getToken()).subscribe(myPlaylists => {this.myPlaylists = myPlaylists;})
  }

  // addToPlaylist(){
  //   this.spotifyService.addToPlaylist('6FCth4CJXmf9TU4O4REmd1', this.uris, this.getToken()).subscribe(
  //     data => console.log(data))
  // }
  
}
