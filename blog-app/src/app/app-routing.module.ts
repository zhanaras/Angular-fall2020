import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostsComponent } from './components/posts/posts.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { RouteBasedComponent } from './route-based/route-based.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MainPageComponent } from './components/main-page/main-page.component';


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: PostDetailComponent },
  { path: 'users/:id/posts', component: UserDetailComponent },
  { path: 'create-post', component: CreatePostComponent },
  { path: 'route-based', component: RouteBasedComponent },
  { path: 'content-projection-based', component: ContentProjectionComponent },
  { path: 'registration', component: SignUpComponent },
  { path: 'login', component: SignInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
