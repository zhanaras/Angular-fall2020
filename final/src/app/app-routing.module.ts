import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistDetailComponent } from './components/artist-detail/artist-detail.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { CurrentUserComponent } from './components/current-user/current-user.component';
import { LoginComponent } from './components/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NewReleasesDetailComponent } from './components/new-releases-detail/new-releases-detail.component';
import { PlaylistDetailComponent } from './components/playlist-detail/playlist-detail.component';


const routes: Routes = [
 { path: '', component: MainPageComponent },
 { path: 'search', component: MainPageComponent },
 { path: 'my-account', component: CurrentUserComponent },
 { path: 'new-releases/:id', component: NewReleasesDetailComponent },
 { path: 'artists/:id', component: ArtistDetailComponent },
 { path: 'album/:id', component: NewReleasesDetailComponent },
 { path: 'single/:id', component: NewReleasesDetailComponent },
 { path: 'playlist/:id', component: PlaylistDetailComponent },
 { path: 'categories/:id', component: CategoryDetailComponent },
 { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
