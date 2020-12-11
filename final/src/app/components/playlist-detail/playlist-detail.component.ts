import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Image } from 'src/app/interfaces/image';
import { SpotifyService } from '../../services/spotify.service'

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.scss']
})
export class PlaylistDetailComponent implements OnInit {
  playlist
  id
  isExplicit: boolean

  url = window.location;
  access_token = new URLSearchParams(this.url.hash).get('#access_token');

  my_id = localStorage.getItem('user_id')
  isFollowing

  form: FormGroup;
  submitted = false;

  modPlaylist = this.fb.group({
    name: [''],
    public: [],
    collaborative: [],
    description: [''],
  })

  constructor(private spotifyService: SpotifyService,
    private route: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getPlaylist()
    this.checkFollow()
    this.isFollowing == this.checkFollow()[0]
    console.log(this.isFollowing)
  }

  get f(){
    return this.modPlaylist.controls
  }

  getToken(){
    return localStorage.getItem('access_token')
  }

  getPlaylist(){
    this.id = this.route.snapshot.paramMap.get('id')
    this.spotifyService.getPlaylist(this.id, this.getToken()).subscribe(playlist => {this.playlist = playlist;
    console.log(playlist);
    for(let track of playlist.tracks.items){
      if(track = true){
        this.isExplicit = true
      }
    else{
      this.isExplicit = false;
    }
    } 
})
}
  modifyPlaylist(){
    let p_id = this.route.snapshot.paramMap.get('id')
    this.spotifyService.modifyPlaylist(p_id, this.f.name.value, this.f.description.value, this.getToken())
    .subscribe(
      data => console.log(data))
  }

  checkFollow(){
    let p_id = this.route.snapshot.paramMap.get('id')
    this.spotifyService.checkFollow(p_id, this.my_id, this.getToken()).subscribe(
      data => {console.log(data);
      this.isFollowing = data})
  }

  unfollow(){
    let p_id = this.route.snapshot.paramMap.get('id')
    this.spotifyService.unfollowPlaylist(p_id, this.getToken()).subscribe(
      data => {console.log(data);})
  }

  follow(){
    let p_id = this.route.snapshot.paramMap.get('id')
    this.spotifyService.followPlaylist(p_id, this.getToken()).subscribe(
      data => {console.log(data);})
  }

}
