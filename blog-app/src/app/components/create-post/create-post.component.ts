import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Posts } from 'src/app/interfaces/posts';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { error } from 'protractor';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  form: FormGroup;
  @Input() post: Posts = null;
  error;
  submitted = false;

  constructor(
    public postsService: PostsService,
    private fb: FormBuilder
  ) { }

  newPost = this.fb.group({
    title: ['', Validators.required],
    body: ['', Validators.required]
  })

  ngOnInit(): void {
  }

  get f() { 
    return this.newPost.controls; 
  }

  get userId(): number {
    return Number(localStorage.getItem("userId")) + 1;
  }

  createPost(){
    this.submitted =true;
    if (this.newPost.invalid){
      console.log('ty dura')
    }
    this.postsService.createPost(this.userId, this.f.title.value, this.f.body.value).pipe(first())
    .subscribe(
      data => {
        window.alert("Your post is published")
        console.log(data)
      },
      error => {
        window.alert(error)
      }
    )
  }

}
