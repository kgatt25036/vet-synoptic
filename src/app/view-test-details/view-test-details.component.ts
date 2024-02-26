import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-view-test-details',
  templateUrl: './view-test-details.component.html',
  styleUrls: ['./view-test-details.component.css']
})
export class ViewTestDetailsComponent implements OnInit {
  testId!: string; // Add the exclamation mark to mark it as definitely assigned
  test$?: Observable<any>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.testId = params['id'];
      // Assuming you have a service to fetch test details by ID
      this.test$ = this.fetchTestDetails(this.testId);
    });
  }

  fetchTestDetails(testId: string): Observable<any> {
    // Implement your logic to fetch test details from backend using the testId
    // Return an Observable with the test details
  }
}
