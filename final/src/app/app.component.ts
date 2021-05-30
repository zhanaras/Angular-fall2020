import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'final';

  isLogged: boolean

  url = window.location;
  access_token = new URLSearchParams(this.url.hash).get('#access_token');

  ngOnInit(): void {
    this.checkLogged()
  }

  checkLogged(){
    if(this.access_token!= null){
      this.isLogged = true;
    }
    else if(this.access_token == ''){
      this.isLogged = false
    }
    console.log(this.isLogged)
  }
}
