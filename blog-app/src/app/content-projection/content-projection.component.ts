import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Albums } from '../interfaces/albums';
import { Users } from '../interfaces/users';
import { AlbumsService } from '../services/albums.service';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-content-projection',
  template: `<ng-content></ng-content>
  <app-child-content>
  </app-child-content>`,
  styleUrls: ['./content-projection.component.scss']
})
export class ContentProjectionComponent implements OnInit {

  constructor( ) { }

  ngOnInit(): void {
  }

}
