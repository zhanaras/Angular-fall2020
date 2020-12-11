import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '.././interfaces/user'
import { Album } from '.././interfaces/album'
import { Playlist } from '../interfaces/playlist';
import { Image } from '../interfaces/image';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private searchUrl: string;
  BASE_URL = 'https://api.spotify.com/v1';
  url = window.location;
  access_token = new URLSearchParams(this.url.search).get('access_token');

  constructor(private _http: HttpClient) { }

  //search

  getArtists(str: string, token: string){
    this.searchUrl = 'https://api.spotify.com/v1/search?q='+str+'&type=artist';
    return this._http.get(this.searchUrl,
    {
      headers: {
      'Authorization': 'Bearer ' + token
      },
    }
    ).pipe(
      map(data => data["artists"].items));
  }

  getAlbums(str: string, token: string){
    this.searchUrl = 'https://api.spotify.com/v1/search?q='+str+'&type=album';
    return this._http.get(this.searchUrl,
    {
      headers: {
      'Authorization': 'Bearer ' + token
      },
    }
    ).pipe(
      map(data => data["albums"].items));
  }

  getTracks(str: string, token: string){
    this.searchUrl = 'https://api.spotify.com/v1/search?q='+str+'&type=track';
    return this._http.get(this.searchUrl,
    {
      headers: {
      'Authorization': 'Bearer ' + token
      },
    }
    ).pipe(
      map(data => data["tracks"].items));
  }

  getPlaylists(str: string, token: string){
    this.searchUrl = 'https://api.spotify.com/v1/search?q='+str+'&type=playlist';
    return this._http.get(this.searchUrl,
    {
      headers: {
      'Authorization': 'Bearer ' + token
      },
    }
    ).pipe(
      map(data => data["playlists"].items));
  }

  getShows(str: string, token: string){
    this.searchUrl = 'https://api.spotify.com/v1/search?q='+str+'&type=show';
    return this._http.get(this.searchUrl,
    {
      headers: {
      'Authorization': 'Bearer ' + token
      },
    }
    ).pipe(
      map(data => data["shows"].items));
  }

  getEpisodes(str: string, token: string){
    this.searchUrl = 'https://api.spotify.com/v1/search?q='+str+'&type=episode';
    return this._http.get(this.searchUrl,
    {
      headers: {
      'Authorization': 'Bearer ' + token
      },
    }
    ).pipe(
      map(data => data["episodes"].items));
  }

  //browse

  getNew(token: string) {
    this.searchUrl = 'https://api.spotify.com/v1/browse/new-releases';
    return this._http.get(this.searchUrl,
    {
      headers: {
      'Authorization': 'Bearer ' + token
      },
    }
    ).pipe(
      map(data => data["albums"].items));
  }

  getLocalNew(token: string) {
    this.searchUrl = 'https://api.spotify.com/v1/browse/new-releases?country=KZ'
    return this._http.get(this.searchUrl,
    {
      headers: {
      'Authorization': 'Bearer ' + token
      },
    }
    ).pipe(
      map(data => data["albums"].items));
  }

  getRec(token: string) {
    this.searchUrl = 'https://api.spotify.com/v1/browse/featured-playlists';
    return this._http.get(this.searchUrl,
    {
      headers: {
      'Authorization': 'Bearer ' + token
      },
    }
    ).pipe(
      map(data => data["playlists"].items));
  }

  getCategories(token: string){
    this.searchUrl = 'https://api.spotify.com/v1/browse/categories';
    return this._http.get(this.searchUrl,
    {
      headers: {
      'Authorization': 'Bearer ' + token
      },
    }
    ).pipe(
      map(data => data["categories"].items));
  }

  getRecTracks(token: string) {
    this.searchUrl = 'https://api.spotify.com/v1/recommendations';
    return this._http.get(this.searchUrl,
    {
      headers: {
      'Authorization': 'Bearer ' + token
      },
    }
    ).pipe(
      map(data => data["tracks"].items));
  }

  //user

  getMyAccount(token: string){
    this.searchUrl = 'https://api.spotify.com/v1/me';
    return this._http.get(this.searchUrl,
    {
      headers: {
      'Authorization': 'Bearer ' + token
      },
    }
    ).pipe(map((res:any) => res))
  }

  // actions with albums and playlists

  getMyPlaylists(token: string){
    this.searchUrl = `https://api.spotify.com/v1/me/playlists`;
    return this._http.get(this.searchUrl,
    {
      headers: {
      'Authorization': 'Bearer ' + token
      },
    }
    ).pipe(map((res:any) => res))
  }

  createPlaylist(user_id: string, name: string, isPublic: boolean, collaborative: boolean, description: string, token: string){
    this.searchUrl = `https://api.spotify.com/v1/users/${user_id}/playlists`;
    return this._http.post<any>(this.searchUrl, 
      {"name": name, 
      "public":isPublic, 
      "collaborative" : collaborative, 
      "description" : description},
      {
      headers: {
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + token
      },
    })
  }

  modifyPlaylist(playlist_id: string, name: string,  description: string, token: string){
    this.searchUrl = `https://api.spotify.com/v1/playlists/${playlist_id}`;
    return this._http.put<any>(this.searchUrl, 
      {"name": name,
      "description" : description},
      {
      headers: {
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + token
      },
    })
  }

  addToPlaylist(playlist_id: string, uris: string[], token: string){
    this.searchUrl = `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`;
    return this._http.put<any>(this.searchUrl, 
      {
        "uris": uris
      },
      {
      headers: {
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + token
      },
    })
  }

  checkFollow(playlist_id: string, id: string, token: string){
    this.searchUrl = `https://api.spotify.com/v1/playlists/${playlist_id}/followers/contains?ids=` + id;
    return this._http.get<any>(this.searchUrl, 
      {
      headers: {
      'Authorization': 'Bearer ' + token
      },
    })
  }

  unfollowPlaylist(playlist_id: string, token: string){
    this.searchUrl = `https://api.spotify.com/v1/playlists/${playlist_id}/followers`;
    return this._http.delete(this.searchUrl, 
      {
      headers: {
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + token
      },
    })
  }

  followPlaylist(playlist_id: string, token: string){
    this.searchUrl = `https://api.spotify.com/v1/playlists/${playlist_id}/followers`;
    return this._http.put<any>(this.searchUrl, 
      {
        "public" : true
      },
      {
      headers: {
      'Authorization': 'Bearer ' + token
      },
    })
  }

  getAlbumDetail(id: string, token: string) {
    this.searchUrl = 'https://api.spotify.com/v1/albums/' + id;
    return this._http.get(this.searchUrl,
    {
      headers: {
      'Authorization': 'Bearer ' + token
      },
    }
    ).pipe(map((res:any) => res))
  }

  getArtistDetail(id: string, token: string){
    this.searchUrl = 'https://api.spotify.com/v1/artists/' + id;
    return this._http.get(this.searchUrl,
    {
      headers: {
      'Authorization': 'Bearer ' + token
      },
    }
    ).pipe(map((res:any) => res))
  }

  getArtistAlbums(id: string, token: string){
    this.searchUrl = 'https://api.spotify.com/v1/artists/' + id + '/albums?include_groups=album';
    return this._http.get(this.searchUrl,
    {
      headers: {
      'Authorization': 'Bearer ' + token
      },
    }
    ).pipe(map((res:any) => res))
  }

  getArtistSingles(id: string, token: string){
    this.searchUrl = 'https://api.spotify.com/v1/artists/' + id + '/albums?include_groups=single';
    return this._http.get(this.searchUrl,
    {
      headers: {
      'Authorization': 'Bearer ' + token
      },
    }
    ).pipe(map((res:any) => res))
  }

  getArtistAppears(id: string, token: string){
    this.searchUrl = 'https://api.spotify.com/v1/artists/' + id + '/albums?include_groups=appears_on';
    return this._http.get(this.searchUrl,
    {
      headers: {
      'Authorization': 'Bearer ' + token
      },
    }
    ).pipe(map((res:any) => res))
  }

  getPlaylist(id: string, token: string){
    this.searchUrl = 'https://api.spotify.com/v1/playlists/' + id;
    return this._http.get(this.searchUrl,
    {
      headers: {
      'Authorization': 'Bearer ' + token
      },
    }
    ).pipe(map((res:any) => res))
  }

  getCategory(id: string, token: string){
    this.searchUrl = 'https://api.spotify.com/v1/browse/categories/' + id;
    return this._http.get(this.searchUrl,
    {
      headers: {
      'Authorization': 'Bearer ' + token
      },
    }
    ).pipe(map((res:any) => res))
  }

  getCategoryPlaylists(id: string, token: string){
    this.searchUrl = `https://api.spotify.com/v1/browse/categories/${id}/playlists`;
    return this._http.get(this.searchUrl,
    {
      headers: {
      'Authorization': 'Bearer ' + token
      },
    }
    ).pipe(map((res:any) => res))
  }
}

