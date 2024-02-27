import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-view-test-details',
  templateUrl: './view-test-details.component.html',
  styleUrls: ['./view-test-details.component.css']
})
export class ViewTestDetailsComponent implements OnInit {
  testId!: string;
  test$?: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.testId = params['id'];
      // Fetch test details
      this.test$ = this.fetchTestDetails(this.testId);
    });
  }

  fetchTestDetails(testId: string): Observable<any> {
    const authToken = localStorage.getItem('accessToken');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}` // Include authentication token in the request headers
    });

    // Make an HTTP GET request to fetch test details by ID
    return this.http.get<any>(`http://localhost:8080/api/tests/${testId}`, { headers });
  }
}
