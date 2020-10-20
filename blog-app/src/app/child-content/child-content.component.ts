import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Albums } from '../interfaces/albums';
import { Users } from '../interfaces/users';
import { AlbumsService } from '../services/albums.service';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-child-content',
  templateUrl: './child-content.component.html',
  styleUrls: ['./child-content.component.scss']
})
export class ChildContentComponent implements OnInit {
  albums: Albums[] = [];
  users: Users[] =[]

  constructor(private albumService: AlbumsService,
    private postsService: PostsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUsers;
  }

  getUsers() {
    this.postsService.getUsers().subscribe(users => {this.users = users;})
  }

  getUserAlbum(id: number) {
    this.albumService.getAlbumByUser(id).subscribe(albums => {this.albums = albums;})
  }

}
