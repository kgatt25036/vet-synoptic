import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject} from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiAuthRequest } from './dto/authrequest.dto';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;
  private apiUrl: string = 'http://localhost:8080'; // Your API URL
  private tokenSubject: BehaviorSubject<string | null>;
  httpHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': '*/*'
});
  constructor(private http: HttpClient) {
    this.tokenSubject = new BehaviorSubject<string | null>(localStorage.getItem('accessToken'));
  }

  signIn(authrequest:ApiAuthRequest): Observable<any> {
   //let requestBody  :string =`{"email": "${email}","password": "${password}"}`; // Create request body
   authrequest;
    return this.http.post<any>(`${this.apiUrl}/api/auth`, authrequest, { headers: this.httpHeader }).pipe(
      tap(response => {
        const accessToken = response.accessToken;
        const tokenType = response.tokenType;

        if (accessToken) {
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('tokenType', tokenType);
          this.tokenSubject.next(`${tokenType} ${accessToken}`);
          this.isLoggedIn = true;
        }
      })
    );
  }

  getAuthorizationHeader(): string | null {
    const accessToken = localStorage.getItem('accessToken');
    const tokenType = localStorage.getItem('tokenType');
    if (accessToken && tokenType) {
      return `${tokenType} ${accessToken}`;
    }
    return null;
  }

  // Method to sign the user out
  signOut(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('tokenType');
    this.tokenSubject.next(null);
    this.isLoggedIn = false;
  }
  
  // Method to check if user is authenticated
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
