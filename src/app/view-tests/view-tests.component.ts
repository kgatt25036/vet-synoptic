import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-view-tests',
  templateUrl: './view-tests.component.html',
  styleUrls: ['./view-tests.component.css']
})
export class ViewTestsComponent implements OnInit {
  tests$: Observable<any[]> = new Observable<any[]>(); // Initialize with an empty observable

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    // Fetch tests data from backend API
    const authToken = this.authService.getToken();// Get authentication token from AuthService
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}` // Include authentication token in the request headers
    });
    this.tests$ = this.http.get<any[]>('http://localhost:8080/api/pettests', { headers });
  }
}
