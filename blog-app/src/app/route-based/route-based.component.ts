import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-based',
  templateUrl: './route-based.component.html',
  styleUrls: ['./route-based.component.scss']
})
export class RouteBasedComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  goToUsers(){
    this.router.navigate(['users'], { relativeTo: this.route })
  }

  userSelectedHandler(users){
    this.router.navigate([users], {relativeTo: this.route})
  }

}
