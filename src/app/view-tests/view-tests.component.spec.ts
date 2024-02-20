import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTestsComponent } from './view-tests.component';

describe('ViewTestsComponent', () => {
  let component: ViewTestsComponent;
  let fixture: ComponentFixture<ViewTestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTestsComponent]
    });
    fixture = TestBed.createComponent(ViewTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
