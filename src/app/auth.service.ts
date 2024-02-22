import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;
  private tokenKey = 'auth_token';
  private apiUrl: string = 'http://localhost:8080/auth'; // Your API URL
  private tokenSubject: BehaviorSubject<string | null>;

  constructor(private http: HttpClient) {
    this.tokenSubject = new BehaviorSubject<string | null>(localStorage.getItem('token'));
  }

  // Method to check if user is authenticated
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

 
  signIn(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap(response => {
        const token = response.token;
        if (token) {
          localStorage.setItem('token', token);
          this.tokenSubject.next(token);
        }
      })
    );
  }
  storeToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return this.tokenSubject.value;
  }


  // Method to sign the user out
  signOut(): void {
    localStorage.removeItem('token');
    this.tokenSubject.next(null);
    this.isLoggedIn = false;
  }
}
