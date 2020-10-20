import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Posts } from 'src/app/interfaces/posts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  posts: Posts[] = [];

  constructor(
    public postsService: PostsService,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.getUsersPosts()
  }

  // getUsersPosts(){
  //   const id = +this.route.snapshot.paramMap.get('id') + 1;
  //   this.postsService.getUsersPosts(id).subscribe(posts => {this.posts = posts;})
  // }

}
