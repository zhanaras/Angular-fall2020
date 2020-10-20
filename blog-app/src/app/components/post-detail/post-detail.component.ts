import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Posts } from 'src/app/interfaces/posts';
import { PostsService } from 'src/app/services/posts.service';
import { Comments } from 'src/app/interfaces/comments';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { first } from 'rxjs/operators';
import { Users } from 'src/app/interfaces/users';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  post: Posts;
  comments: Comments[] = [];
  // cName: string;
  // cEmail: string;
  // cBody: string;
  // cId: number;

  comment: any = {};
  submitted = false;
  loading = false;
  error;
  users: Users[] = [];

  constructor(
    public postsService: PostsService,
    public route: ActivatedRoute,
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.getPostById();
    this.getComments();
  }

  getPostById(){
    const id = +this.route.snapshot.paramMap.get('id') + 1;
    this.postsService.getPostById(id).subscribe(post => {this.post = post;})
  }

  getComments(){
    const id = +this.route.snapshot.paramMap.get('id') + 1;
    this.postsService.getPostsComment(id).subscribe(comments => {this.comments = comments;})
  }

  // postComment(postId){
  //   this.postsService.postComment(postId, this.cId, this.cName, this.cEmail, this.cBody);
  //   console.log("comment posted");
  // }

    commentForm = this.formBuilder.group({
      cName: ['', Validators.required],
      cEmail: ['', Validators.required],
      cBody: ['', Validators.required]
    })

    get fCtrl(){
      return this.commentForm.controls;
    }

    get postId(){
      const id = +this.route.snapshot.paramMap.get('id') + 1;
      return id;
    }

    postComment(){
      this.submitted = true;


      if(this.commentForm.invalid){
        return;
      }
      this.loading = true;
      this.postsService.postComment(this.postId, this.fCtrl.cName.value, this.fCtrl.cEmail.value, this.fCtrl.cBody.value)
      .subscribe(
          comment => this.comments.push(comment));
      // console.log(this.postsService.token);
    }
  }
