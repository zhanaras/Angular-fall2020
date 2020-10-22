import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostsComponent } from './components/posts/posts.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouteBasedComponent } from './route-based/route-based.component';
import { UsersComponent } from './components/users/users.component';
import { UserAlbumComponent } from './components/user-album/user-album.component';
import { ChildContentComponent } from './child-content/child-content.component';


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: PostDetailComponent },
  { path: 'create-post', component: CreatePostComponent },
  { path: 'content-projection-based', component: ContentProjectionComponent },
  { path: 'registration', component: SignUpComponent },
  { path: 'login', component: SignInComponent },
  { path: 'route-based-albums', component: RouteBasedComponent,
    children: [
      {
        path: '', component: UsersComponent,
      },
      {
        path: ':id', component: UserAlbumComponent
      }
    ] },
    { path: 'child', component: ChildContentComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
