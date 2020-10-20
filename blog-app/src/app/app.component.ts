import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { PostsService } from './services/posts.service';
import { Posts } from './interfaces/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog-app';
  max = 10;

  constructor(public loginService: LoginService,
              public postsService: PostsService){}

  ngOnInit(): void {
  }

  loadMore($event){
    this.max = this.max + 10;
    $event.target.complete();
  }

}
