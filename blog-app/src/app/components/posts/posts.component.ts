import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Posts } from 'src/app/interfaces/posts';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/interfaces/users';
import { LoginService } from 'src/app/services/login.service'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  visible: boolean = false;

  posts: Posts[] = [];
  users: Users[] = [];
  user: Users;
  isSelected: boolean = false;
  // authToken: string = localStorage.getItem('currentUser');

  constructor(
    public postsService: PostsService,
    public route: ActivatedRoute,
    public loginService: LoginService
  ) { }

  currentUser = this.loginService.currentUserValue;

  ngOnInit(): void {
    this.getPosts();
    this.getUsersById();
    this.getUsers();
    // console.log(this.currentUser.access_token)
  }

  filter(){
    this.visible = true;
  }

  getPosts(){
    this.postsService.getPosts().subscribe(posts => {this.posts = posts;}); 
  }

  getUsersById(){
    const id = +this.route.snapshot.paramMap.get('id') + 1;
    this.postsService.getUserById(id).subscribe(user => {this.user = user;})
  }

  getUsers(){
    this.postsService.getUsers().subscribe(users => {this.users = users;});
  }

  getUsersPosts(selectedUsersId: number){
    this.isSelected = true;
    this.postsService.getUsersPosts(selectedUsersId).subscribe(posts => {this.posts = posts;})
    console.log(selectedUsersId)
  }

  

}
