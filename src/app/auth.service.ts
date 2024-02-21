import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;
  private tokenKey = 'auth_token';
  private apiUrl: string = 'http://localhost:8080/auth'; // Your API URL

  constructor(private http: HttpClient) { }

  // Method to check if user is authenticated
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

 
  // Method to sign the user in
  signIn(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password });
  }
  storeToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }


  // Method to sign the user out
  signOut(): void {
    // Implement your sign-out logic here
    this.isLoggedIn = false;
  }
}
