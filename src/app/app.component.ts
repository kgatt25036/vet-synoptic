import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'vet-synoptic';

  constructor(private router: Router) {} // Inject Router service in the constructor

  ngOnInit(): void {
    this.router.navigate(['/login']);
  }
  signOut(): void {
    this.router.navigate(['/login']);
  }
  navigateToViewTest(): void {
    this.router.navigate(['/view-tests']);
  }
}
