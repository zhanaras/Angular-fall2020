import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Posts } from '../interfaces/posts';
import { Comments } from '../interfaces/comments';
import { Users } from '../interfaces/users';
import { map } from 'rxjs/operators';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  BASE_URL = 'https://jsonplaceholder.typicode.com'
  

  constructor(
    private http: HttpClient,
    public loginService: LoginService
  ) { }

  // user = JSON.parse(localStorage.getItem('currentUser'))
  // token = this.user.access_token
  
  // authToken = this.currentUser.access_token

  load(): Observable<Posts[]>{
    return this.http.get<Posts[]>(`http://localhost:3000/posts`);
  }

  getPosts(): Observable<Posts[]>{
    let user = JSON.parse(localStorage.getItem('currentUser'))
    let token = user.access_token
    return this.http.get<Posts[]>(`http://localhost:3000/posts`, 
    {
      headers: {
        Authorization: `${token}`
      },
    }
    )
  }

  getPostById(id: number): Observable<any>{
    let user = JSON.parse(localStorage.getItem('currentUser'))
    let token = user.access_token
    return this.http.get<Posts>(`http://localhost:3000/posts/${id}`,
     {
      headers: {
        Authorization: `${token}`
      },
    }
    );
  }

  getPostsComment(id: number): Observable<Comments[]>{
    let user = JSON.parse(localStorage.getItem('currentUser'))
    let token = user.access_token
    return this.http.get<Comments[]>(`http://localhost:3000/posts/${id}/comments`, {
      headers: {
        Authorization: `${token}`
      },
    });
  }

  getComments(): Observable<Comments[]>{
    let user = JSON.parse(localStorage.getItem('currentUser'))
    let token = user.access_token
    return this.http.get<Comments[]>(`http://localhost:3000/comments`, {
      headers: {
        Authorization: `${token}`
      },
    });
  }

  getUsersPosts(selectedUserId: number): Observable<Posts[]>{
    return this.http.get<Posts[]>(`http://localhost:3000/users/${selectedUserId}/posts`);
  }

  getUsers(): Observable<Users[]>{
    return this.http.get<Users[]>(`http://localhost:3000/users`);
  }

  getUserById(id: number): Observable<any>{
    return this.http.get<Users>(`http://localhost:3000/users/${id}`);
  }

  postComment(postId:number, name: string, email: string, body: string): Observable<any> {
    let user = JSON.parse(localStorage.getItem('currentUser'))
    let token = user.access_token
    return this.http.post<Comment>(`http://localhost:3000/comments`, {postId, name, email, body},
      {headers: {
        Authorization: `${token}`
      }},
    );
  }

  createPost(userId:number, title: string, body: string): Observable<Posts>{
    let user = JSON.parse(localStorage.getItem('currentUser'))
    let token = user.access_token
    return this.http.post<Posts>(`http://localhost:3000/posts/`, {userId, title, body},
    {headers: {
      Authorization: `${token}`
    }},)
  }

}
