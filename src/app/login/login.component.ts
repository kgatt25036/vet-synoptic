import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ApiAuthRequest } from '../dto/authrequest.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  _email: string = '';
  _password: string = '';
  loginError: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    let authRequest:ApiAuthRequest = new ApiAuthRequest(this._email,this._password);
    // Call the AuthService to authenticate the user
    this.authService.signIn(authRequest).subscribe(
      () => {
        // Redirect to the test list view upon successful login
        this.router.navigate(['/view-tests']);
      },
      (error) => {
        // Display error message if authentication fails
        this.loginError = error.error || 'An error occurred during login.';
        console.error(error);
      }
    );
  }
}
