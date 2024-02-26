import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-tests',
  templateUrl: './view-tests.component.html',
  styleUrls: ['./view-tests.component.css']
})
export class ViewTestsComponent implements OnInit {
  tests$: Observable<any[]> = new Observable<any[]>(); // Initialize with an empty observable

  constructor(private http: HttpClient, private authService: AuthService,private router:Router) { }
  viewTest(testId: number): void {
    this.router.navigate(['/view-test-details', testId]);
  }
  updateTest(testId: number): void {
    this.router.navigate(['/update-test', testId]);
  }
  deleteTest(testId: number): void {
    if (confirm('Are you sure you want to delete this test?')) {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        console.error('Access token not found in local storage.');
        return;
      }
  
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        })
      };
  
      this.http.delete(`http://localhost:8080/api/pettests/${testId}`, httpOptions).subscribe(
        () => {
          // Refresh the page after deletion
          location.reload();
        },
        error => {
          console.error('Error deleting test:', error);
          // Handle error if needed
        }
      );
    }
  }
  
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
