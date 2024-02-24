import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-tests',
  templateUrl: './view-tests.component.html',
  styleUrls: ['./view-tests.component.css']
})
export class ViewTestsComponent implements OnInit {
  tests$: Observable<any[]> = new Observable<any[]>(); // Initialize with an empty observable

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Fetch tests data from backend API
    this.tests$ = this.http.get<any[]>('http://localhost:8080/api/pettests');
  }
}
