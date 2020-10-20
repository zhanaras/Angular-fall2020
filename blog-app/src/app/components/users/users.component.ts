import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Albums } from 'src/app/interfaces/albums';
import { Users } from 'src/app/interfaces/users';
import { AlbumsService } from 'src/app/services/albums.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @Output() userSelected = new EventEmitter<number>();

  users: Users[] = []
  albums: Albums[] =[]
  user: Users;

  constructor(
    private postsService: PostsService,
    private albumService: AlbumsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getUsers()
    // this.getAlbums()

  }

  getUsers(){
    this.postsService.getUsers().subscribe(users => {this.users = users; })
  }

  getAlbums(){
    this.albumService.getAlbums().subscribe(albums => {this.albums = albums})
  }

  goToUsers(id: number){
    this.router.navigate([id], { relativeTo: this.route })
  }
}
