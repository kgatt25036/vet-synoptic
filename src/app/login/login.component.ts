import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginError: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    // Call the AuthService to authenticate the user
    this.authService.signIn(this.email, this.password).subscribe(
      () => {
        // Redirect to the test list view upon successful login
        this.router.navigate(['/view-tests']);
      },
      (error) => {
        // Display error message if authentication fails
        this.loginError = error.message;
      }
    );
  }
}
