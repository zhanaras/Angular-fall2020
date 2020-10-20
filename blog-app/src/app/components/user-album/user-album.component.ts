import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Albums } from 'src/app/interfaces/albums';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'app-user-album',
  templateUrl: './user-album.component.html',
  styleUrls: ['./user-album.component.scss']
})
export class UserAlbumComponent implements OnInit {

  albums: Albums[] = []

  constructor(
    private albumService: AlbumsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getUsersAlbum()
  }

  getUsersAlbum(){
    const userId = +this.route.snapshot.paramMap.get('id');
    this.albumService.getAlbumByUser(userId).subscribe(albums => {this.albums = albums; })
  }

}
