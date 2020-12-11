import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MainPageComponent } from './components/main-page/main-page.component';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowseComponent } from './components/browse/browse.component';
import { CurrentUserComponent } from './components/current-user/current-user.component';
import { ArtistDetailComponent } from './components/artist-detail/artist-detail.component';
import { NewReleasesDetailComponent } from './components/new-releases-detail/new-releases-detail.component';
import { PlaylistDetailComponent } from './components/playlist-detail/playlist-detail.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { LoginComponent } from './components/login/login.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainPageComponent,
    BrowseComponent,
    CurrentUserComponent,
    ArtistDetailComponent,
    NewReleasesDetailComponent,
    PlaylistDetailComponent,
    CategoryDetailComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    MatDialogModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSlideToggleModule
  ],
  providers: [
],
  bootstrap: [AppComponent]
})
export class AppModule { }
