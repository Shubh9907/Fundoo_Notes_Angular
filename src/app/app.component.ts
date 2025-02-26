import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FundooNotes';
  

  auth = localStorage.getItem("data");

  constructor(private router: Router) {
    router.events.subscribe(data => { this.auth = localStorage.getItem("data") });
  } 
}
