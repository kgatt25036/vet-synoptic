import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; // Adjust the path as needed

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false; // Example property to track user authentication status

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // Implement logic to check if user is authenticated (e.g., using AuthService)
    this.isLoggedIn = this.authService.isAuthenticated();
  }

  signOut(): void {
    // Implement sign-out logic (e.g., using AuthService)
    this.authService.signOut();
    // Redirect to login page or perform any other necessary actions
  }
}
