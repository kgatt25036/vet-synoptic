import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTestDetailsComponent } from './view-test-details.component';

describe('ViewTestDetailsComponent', () => {
  let component: ViewTestDetailsComponent;
  let fixture: ComponentFixture<ViewTestDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTestDetailsComponent]
    });
    fixture = TestBed.createComponent(ViewTestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
