import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostsComponent } from './components/posts/posts.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouteBasedComponent } from './route-based/route-based.component';
import { UsersComponent } from './components/users/users.component';
import { UserAlbumComponent } from './components/user-album/user-album.component';
import { ChildContentComponent } from './child-content/child-content.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    PostDetailComponent,
    PostsComponent,
    CreatePostComponent,
    ContentProjectionComponent,
    MainPageComponent,
    SignUpComponent,
    NotFoundComponent,
    RouteBasedComponent,
    UsersComponent,
    UserAlbumComponent,
    ChildContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSliderModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatTabsModule,
  ],
  providers: [
    AuthInterceptor,
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi   : true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
